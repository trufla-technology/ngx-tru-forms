import {Component, DoCheck, EventEmitter, Input, OnDestroy, Output, ViewChild, ViewContainerRef} from "@angular/core";
import { FormBuilder, NgForm} from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { SchemaFormControl } from './models/schema-form-control';
import { JsonFormDefaultsService } from './services/defaults.service';
import { SchemaFormGroup } from './models/schema-form-group';
import { SchemaFormArray } from './models/schema-form-array';
import { JsonFormFieldsService } from './framework/json-form-fields.service';

@Component({
  selector: 'jf-form',
  template: `
    <form
      #userForm="ngForm"
      [formGroup]="form"
      (ngSubmit)="handleOnSubmit()"
      *ngIf="isValidSchema()"
    >
      <div
        jf-component-chooser
        [ngClass]="[classes.outer || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']"
        [form]="form"
        [schema]="activeSchema">
      </div>
      <div #ref>
        <ng-content></ng-content>
      </div>
      <div
        #buttons
        *ngIf="ref.children.length == 0"
        [ngClass]="{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}">
        <jf-form-button
          *ngIf="cancel"
          [cancel]="cancel"
          [steps]="steps"
          [isMultiStep]="isMultiStep"
          [isWorking]="isWorking"
          (handleClick)="handleOnCancel()"
          [classes]="classes">
        </jf-form-button>
        <jf-form-button
          *ngIf="submit"
          [classes]="classes"
          [submit]="submit"
          [steps]="steps"
          [continue]="continue"
          [isMultiStep]="isMultiStep"
          [isWorking]="isWorking"
          [isFormValid]="this.form.valid">
        </jf-form-button>
      </div>
    </form>
  `
})
export class JsonFormComponent implements DoCheck, OnDestroy {
  @Input() schema;
  @Input() data = {};
  @Input() style = {};
  @Input() continue = 'Continue';
  @Input() submit: string;
  @Input() cancel: string;
  @Input() classes = { submit: '', cancel: '', outer: '' };
  @Input() isWorking = false;
  @Input() isMultiStep = false;
  @Input() activeStep = null;
  @Input() state = false;
  @Input() id = '';
  @Input() fields = {};
  @Input() viewOnly = false;
  @Output() handleStep = new EventEmitter();
  @Output() handleSubmit = new EventEmitter();
  @Output() handleChange = new EventEmitter();
  @Output() handleCancel = new EventEmitter();
  @ViewChild('userForm') userForm: NgForm;

  public form;
  public model;
  public control = { key: '', value: '', isPartOf: false };
  public oldSchema: string;
  public oldData: string;
  public changeDetected = false;
  public oldActiveStep = '';
  public steps = [];
  public multiStepData = {};
  public activeSchema = {};
  public activeStyle = {};

  constructor(
    private fb: FormBuilder,
    private vl: JsonFormValidatorsService,
    private df: JsonFormDefaultsService,
    private jf: JsonFormFieldsService
  ) {}

  ngDoCheck(): void {
    this.changeDetected = false;

    if (this.oldSchema !== JSON.stringify(this.schema)) {
      this.oldSchema = JSON.stringify(this.schema);
      this.changeDetected = true;
    }

    if (this.oldData !== JSON.stringify(this.data)) {
      this.oldData = JSON.stringify(this.data);
      this.changeDetected = true;
    }

    if (this.oldActiveStep !== this.activeStep) {
      this.oldActiveStep = this.activeStep;
      this.changeDetected = true;
    }

    if (this.changeDetected) {
      this.appendFields();
      this.constructForm();
    }
  }

  ngOnDestroy(): void {
    this.form.valueChanges.unsubscribe();
  }

  appendFields() {
    Object.keys(this.fields).forEach((f) => {
      this.jf[0].register(f, this.fields[f]);
    });
  }

  constructForm() {
    this.model = {};

    if (this.isValidSchema()) {
      this.activeSchema = this.schema;
      this.activeStyle = this.style;

      // emit the initial step for the event
      if (this.steps.length === 0 && this.isMultiStep) {
        this.steps = this.getSteps(this.schema, this.activeStep);
        this.handleStep.emit({ id: this.id, data: null, steps: this.steps });
      }

      if (this.steps.length > 0 && this.isMultiStep) {
        const visibleStepName = this.activeStep > 0 ? this.activeStep : this.steps.find((s) => s.visible).name;
        this.activeSchema = this.schema.properties[visibleStepName];
        this.activeStyle = this.style.hasOwnProperty(visibleStepName) ? this.style[visibleStepName] : {};
        this.data = this.state && this.multiStepData.hasOwnProperty(visibleStepName)
          ? this.multiStepData[visibleStepName] : this.data;
      }

      this.activeSchema = this.subRefs(this.activeSchema);
      this.model = this.generateForm(this.activeSchema, {}, this.data, this.activeStyle);
      this.form = this.fb.group(this.model);

      this.form.valueChanges.subscribe((data) => {
        if (this.control.isPartOf) {
          this.data = data;
          this.constructForm();
        }

        this.handleChange.emit({ id: this.id, control: this.control, data });
      });
    }
  }

  getSteps(schema, activeStep): Array<any> {
    return Object.keys(schema.properties).map((name, index) => {
      let type = 'step';
      if (index === 0) {
        this.activeStep = this.activeStep || name;
        type = 'first';
      } else if (index === Object.keys(schema.properties).length - 1) {
        type = 'last';
      }

      return {
        index,
        name,
        visible: activeStep ? activeStep === name : index === 0,
        type,
        title: schema.properties[name].hasOwnProperty('title') ? schema.properties[name].title : name
      };
    });
  }

  isValidSchema() {
    return typeof (this.schema) === 'object' && Object.keys(this.schema).length > 0;
  }

  private generateForm (schema, group?: {}, data?: {}, style?: {}, path?: Array<any>) {
    if (!this.isVisible(schema)) {
      return group;
    }

    if (!path) {
      path = [];
    }

    Object.keys(schema.properties).forEach((prop) => {
      if (schema.properties[prop].type === 'object') {
        const groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
        const groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
        group[prop] = new SchemaFormGroup(this.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
        group[prop].schema = schema.properties[prop];
        group[prop].style = groupStyle;
      } else if (schema.properties[prop].type === 'array' && !this.isFormat(schema.properties[prop], 'multiselect')) {
        path.push(prop);
        const arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
        const arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
        let fbArray = [];

        if (schema.properties[prop].enum) {
          fbArray = schema.properties[prop].enum.map((e) => {
            const control = new SchemaFormControl();
            control.schema = Object.assign({}, schema.properties[prop]);
            control.schema.key = prop;
            control.valueChanges.subscribe((event) => this.handleOnChange(prop, event));
            return control;
          });
        } else {
          fbArray = arrayData.map((dataAtIndex) => {
            const g = new SchemaFormGroup(this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
            g.schema = schema.properties[prop];
            return g;
          });
        }

        group[prop] = new SchemaFormArray(fbArray);
        group[prop].schema = schema.properties[prop];
        group[prop].schema.key = prop;
        group[prop].style = arrayStyle;
      } else if (this.isVisible(schema.properties[prop])) {
        if (this.isOneOf(schema, prop)) {
          return;
        }

        const control = new SchemaFormControl(this.df.get(prop, schema, data), this.vl.get(prop, schema, path));
        control.schema = Object.assign({}, schema.properties[prop]);
        control.schema.key = prop;
        control.style = (style && style.hasOwnProperty(prop)) ? style[prop] : {};
        control.valueChanges.subscribe((event) => this.handleOnChange(prop, event, this.inOneOf(schema, prop)));
        group[prop] = control;
      }
    });

    return group;
  }

  isOneOf(schema, prop) {
    if (typeof (schema.oneOf) !== 'undefined') {
      return schema.oneOf.filter((p) => {
        const key = Object.keys(p.properties)[0];
        if (p.properties[key].required.indexOf(prop) > -1) {
          return this.data.hasOwnProperty(key) === false || p.properties[key].enum.indexOf(this.data[key]) === -1;
        }

        return false;
      }).length > 0;
    }

    return false;
  }

  inOneOf(schema, prop) {
    if (typeof (schema.oneOf) !== 'undefined') {
      return schema.oneOf.filter((p) => {
        const key = Object.keys(p.properties)[0];
        return key === prop;
      }).length > 0;
    }

    return false;
  }

  isVisible (prop) {
    return prop.hasOwnProperty('visible') === false || (prop.hasOwnProperty('visible') && prop.visible === true);
  }

  isFormat(prop, format) {
    return prop.hasOwnProperty('format') && prop.format === format;
  }

  /**
   * External method for ensuring the form is valid
   */
  isValid(): boolean {
    return this.form.valid;
  }

  /**
   * Trigger external submission
   */
  submitForm() {
    this.userForm.ngSubmit.emit();
  }

  handleOnSubmit() {
    this.touchAll(this.form.controls);

    if (this.form.valid && this.isMultiStep) {
      const prev = this.steps.findIndex((s) => s.visible);
      this.multiStepData[this.activeStep] = this.form.value;
      const current = this.steps.findIndex((s) => s.name === this.activeStep);
      const next = current + 1;

      if (typeof (this.steps[next]) !== 'undefined') {
        this.steps[prev].visible = false;
        this.steps[next].visible = true;
        this.activeStep = this.steps[next].name;
        this.handleStep.emit({
          dir: 'next',
          id: this.id,
          data: { [this.steps[prev].name]: this.multiStepData[this.steps[prev].name] },
          steps: this.steps
        });
        this.constructForm();
      } else {
        this.handleSubmit.emit(this.multiStepData);
      }

    } else if (this.form.valid) {
      this.handleSubmit.emit(this.form.value);
    }
  }

  handleOnChange(key, value, isPartOf = false) {
    this.control = { key, value, isPartOf };
  }

  handleOnCancel() {
    if (this.isMultiStep) {
      const prev = this.steps.findIndex((s) => s.visible);
      this.steps[prev].visible = false;
      const current = this.steps.findIndex((s) => s.name === this.activeStep);
      const next = current - 1;

      if (typeof (this.steps[next]) !== 'undefined') {
        this.steps[next].visible = true;
        this.activeStep = this.steps[next].name;
        this.handleStep.emit({
          dir: 'prev',
          id: this.id,
          data: { [this.steps[current].name]: this.multiStepData[this.steps[prev].name] },
          steps: this.steps
        });
        this.constructForm();
      } else {
        this.handleCancel.emit(this.form.value);
      }

    } else if (this.form.valid) {
      this.handleCancel.emit(this.form.value);
    }
  }

  touchAll(controls) {
    Object.keys(controls).forEach((key) => {
      if (controls[key].hasOwnProperty('controls')) {
        this.touchAll(controls[key].controls);
      }
      controls[key].markAsTouched();
    });
  }

  subRefs(schema) {
    Object.keys(schema.properties).forEach((prop) => {
      if (schema.properties[prop].hasOwnProperty('$ref')) {
        schema.properties[prop] = this.schema.definitions[schema.properties[prop]['$ref'].replace('#/definitions/', '')];
      }
    });

    return schema;
  }
}
