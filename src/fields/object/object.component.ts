import {Component, Input, OnInit} from '@angular/core';
import {SchemaFormControl} from '../../models/schema-form-control';

@Component({
  template: '<div jf-component-chooser [form]="control"></div>'
})
export class ObjectComponent {
  @Input() control: SchemaFormControl;
}

