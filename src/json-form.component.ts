import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
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
      <jf-component-chooser [form]="form" [schema]="schema"></jf-component-chooser>
      <input type="submit" *ngIf="submit" [attr.value]="submit" class="btn btn-primary" [disabled]="form.invalid" />
    </form>
  `
})
export class JsonFormComponent implements OnInit {
  @Input()
  public schema;
  @Input()
  public data;
  @Input()
  public layout;
  @Input()
  public submit: string;
  @Output()
  handleSubmit = new EventEmitter();
  @Output()
  handleChange = new EventEmitter();

  public form;
  public model;
  public fb;

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
      this.model = this.generateForm(this.schema, {}, this.data, this.layout);
      this.form = this.fb.group(this.model);
    }
  }

  public isValidSchema() {
    return typeof (this.schema) === 'object' && Object.keys(this.schema).length > 0;
  }

  private generateForm (schema, group?: {}, data?: {}, layout?: {}) {
    Object.keys(schema.properties).forEach((prop) => {
      if (schema.properties[prop].type === 'object') {
        const groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
        const groupLayout = layout && layout.hasOwnProperty(prop) ? layout[prop] : {};
        group[prop] = new SchemaFormGroup(this.generateForm(schema.properties[prop], {}, groupData, groupLayout));
        group[prop].schema = schema.properties[prop];
      } else if (schema.properties[prop].type === 'array') {
        const arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
        const fbArray = arrayData.map((dataAtIndex) => {
          const g = new SchemaFormGroup(this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}));
          g.schema = schema.properties[prop];
          return g;
        });
        group[prop] = new SchemaFormArray(fbArray);
        group[prop].schema = schema.properties[prop];
      } else {
        const control = new SchemaFormControl(this.df.get(prop, schema, data), this.vl.get(prop, schema));
        // tslint:disable-next-line
        control.schema = { ...schema.properties[prop], key: prop };
        control.layout = layout;
        control.valueChanges.subscribe(() => this.handleOnChange());
        group[prop] = control;
      }
    });

    return group;
  }

  handleOnSubmit() {
    this.handleSubmit.emit(this.form.value);
  }

  handleOnChange() {
    this.handleChange.emit(this.form.value);
  }
}
