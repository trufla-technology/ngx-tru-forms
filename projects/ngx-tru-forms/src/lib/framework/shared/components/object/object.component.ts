import {Component, Input} from '@angular/core';
import {SchemaFormControl} from '../../../../models/schema-form-control';

@Component({
  template: `
    <div [ngClass]="['object', control.schema.key]"
      jf-component-chooser
      [form]="control"
      [schema]="control.schema"
      [language]= "language"
      [nested]="true">
    </div>`
})
export class ObjectComponent {
  @Input() control: SchemaFormControl;
  @Input() language;
}

