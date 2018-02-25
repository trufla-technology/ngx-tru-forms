import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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
      <div jf-component-chooser [form]="form" [schema]="schema"></div>
      <div class="grid margin-top--triple">
        <div class="smart--one-half grid__item margin-bottom" *ngIf="cancel">
          <button class="btn btn-default button">{{cancel}}</button>
        </div>
        <div class="smart--one-half grid__item margin-bottom" *ngIf="submit">
          <button type="submit" class="btn btn-primary button button--accept" [disabled]="form.invalid">
            {{submit}}
          </button>
        </div>
      </div>
    </form>
  `
})
export class JsonFormComponent implements OnInit {
  @Input()
  public schema;
  @Input()
  public data;
  @Input()
  public style;
  @Input()
  public submit: string;
  @Input()
  public cancel: string;
  @Output()
  handleSubmit = new EventEmitter();
  @Output()
  handleChange = new EventEmitter();

  public form;
  public model;
  public fb;
  public control = { key: '', value: '' };

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    public vl: JsonFormValidatorsService,
    public df: JsonFormDefaultsService
  ) {
    this.fb = fb;
  }

  ngOnInit() {
    this.model = {};
    if (this.isValidSchema()) {
      this.model = this.generateForm(this.schema, {}, this.data, this.style);
      this.form = this.fb.group(this.model);
      this.form.valueChanges.subscribe((data) => {
        this.handleChange.emit({ control: this.control, data });
      });
    }
  }

  public isValidSchema() {
    return typeof (this.schema) === 'object' && Object.keys(this.schema).length > 0;
  }

  private generateForm (schema, group?: {}, data?: {}, style?: {}) {
    Object.keys(schema.properties).forEach((prop) => {
      if (schema.properties[prop].type === 'object') {
        const groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
        const groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
        group[prop] = new SchemaFormGroup(this.generateForm(schema.properties[prop], {}, groupData, groupStyle));
        group[prop].schema = schema.properties[prop];
        group[prop].style = groupStyle;
      } else if (schema.properties[prop].type === 'array') {
        const arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
        const arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
        const fbArray = arrayData.map((dataAtIndex) => {
          const g = new SchemaFormGroup(this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}));
          g.schema = schema.properties[prop];
          return g;
        });
        group[prop] = new SchemaFormArray(fbArray);
        group[prop].schema = schema.properties[prop];
        group[prop].stt = schema.properties[prop];
      } else {
        const control = new SchemaFormControl(this.df.get(prop, schema, data), this.vl.get(prop, schema));
        // tslint:disable-next-line
        control.schema = { ...schema.properties[prop], key: prop };
        control.style = style[prop];
        control.valueChanges.subscribe((event) => this.handleOnChange(prop, event));
        group[prop] = control;
      }
    });

    return group;
  }

  handleOnSubmit() {
    this.handleSubmit.emit(this.form.value);
  }

  handleOnChange(key, value) {
    this.control = { key, value };
  }
}
