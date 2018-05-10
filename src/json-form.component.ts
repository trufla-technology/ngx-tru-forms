import { Component, DoCheck, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { SchemaFormControl } from './models/schema-form-control';
import { JsonFormDefaultsService } from './services/defaults.service';
import { SchemaFormGroup } from './models/schema-form-group';
import { SchemaFormArray } from './models/schema-form-array';

@Component({
  selector: 'jf-form',
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="handleOnSubmit()"
      *ngIf="isValidSchema()"
    >
      <div jf-component-chooser
           [class]="outerClass"
           [form]="form"
           [submitted]="submitted"
           [schema]="schema">
      </div>
      <div #ref>
        <ng-content></ng-content>
      </div>
      <div
        *ngIf="ref.children.length == 0"
        [ngClass]="{
             'margin-top--double': true,
             'page-actions--edges': (cancel && submit),
             'page-actions--center': (!cancel || !submit)
           }">
        <button
          type="button"
          [ngClass]="['btn btn-default button', cancelClass]"
          *ngIf="cancel"
          [disabled]="isWorking"
          (click)="handleOnCancel()">{{cancel}}</button>
        <button
          type="submit"
          [ngClass]="['btn btn-primary button button--accept', submitClass]"
          *ngIf="submit"
          [disabled]="isWorking"
        >
            <svg *ngIf="isWorking" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"/>
                  </path>
                </g>
              </g>
            </svg>
            {{getSubmitLabel()}}
        </button>
      </div>
    </form>
  `
})
export class JsonFormComponent implements OnInit, DoCheck, OnDestroy {
  @Input()
  public schema;
  @Input()
  public data = {};
  @Input()
  public style;
  @Input()
  public continue = 'Continue';
  @Input()
  public submit: string;
  @Input()
  public cancel: string;
  @Input()
  public outerClass: string;
  @Input()
  public submitClass = '';
  @Input()
  public cancelClass = '';
  @Input()
  public isWorking = false;
  @Input()
  public isMultiStep = true;
  @Output()
  handleSubmit = new EventEmitter();
  @Output()
  handleChange = new EventEmitter();
  @Output()
  handleCancel = new EventEmitter();

  public form;
  public model;
  public fb;
  public control = { key: '', value: '', isPartOf: false };
  public oldSchema: string;
  public oldData: string;
  public changeDetected = false;
  public submitted = false;
  public steps = [];
  public multiStepData = {};

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    public vl: JsonFormValidatorsService,
    public df: JsonFormDefaultsService
  ) {
    this.fb = fb;
  }

  ngOnInit() {
    this.isWorking = false;
    this.constructForm();
  }

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

    if (this.changeDetected) {
      this.submitted = false;
      this.constructForm();
    }
  }

  ngOnDestroy(): void {
    this.form.valueChanges.unsubscribe();
  }

  public constructForm() {
    this.model = {};

    if (this.isValidSchema()) {
      if (this.steps.length === 0 && this.isMultiStep) {
        this.steps = this.getSteps(this.schema);
      }

      let schema = this.isMultiStep ? this.schema.properties[this.steps.find((s) => s.visible).name] : this.schema;
      schema = this.subRefs(schema);

      this.model = this.generateForm(schema, {}, this.data, this.style);
      this.form = this.fb.group(this.model);
      this.form.valueChanges.subscribe((data) => {
        if (this.control.isPartOf) {
          this.data = data;
          this.constructForm();
        }

        this.handleChange.emit({ control: this.control, data });
      });
    }
  }

  public getSteps(schema): Array<any> {
    return Object.keys(schema.properties).map((name, index) => {
      let type = 'step';
      if (index === 0) {
        type = 'first';
      } else if (index === Object.keys(schema.properties).length - 1) {
        type = 'last';
      }

      return {
        index,
        name,
        visible: index === 0,
        type
      };
    });
  }

  public isValidSchema() {
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

  handleOnSubmit() {
    this.touchAll(this.form.controls);

    if (this.form.valid && this.isMultiStep) {
      const prev = this.steps.findIndex((s) => s.visible);
      this.steps[prev].visible = false;
      this.multiStepData[this.steps[prev].name] = this.form.value;
      const index = prev + 1;
      const next = this.steps.findIndex((s) => s.index === index);
      if (typeof (this.steps[next]) !== 'undefined') {
        this.steps[next].visible = true;
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
    this.handleCancel.emit(this.form.value);
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

  getSubmitLabel() {
    if (this.isMultiStep) {
      const step = this.steps.findIndex((s) => s.visible);
      if (this.steps[step] && this.steps[step].type !== 'last') {
        return this.continue;
      }
    }

    return this.submit;
  }
}
