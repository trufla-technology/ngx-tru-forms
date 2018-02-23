import {Component, Input, OnInit} from '@angular/core';
import {SchemaFormControl} from '../../models/schema-form-control';

@Component({
  template: '<jf-component-chooser [form]="control"></jf-component-chooser>'
})
export class ObjectComponent {
  @Input() control: SchemaFormControl;
}
