import { Component, Input, OnInit } from '@angular/core';
import { SchemaFormGroup } from '../../models/schema-form-group';

@Component({
  selector: 'jf-component-chooser, [jf-component-chooser]',
  template: `
    <div
      *ngFor="let control of keys(form.controls)"
      jf-field
      [control]="form.get(control)"
      [index]="index"
    ></div>
  `
})
export class ChooserComponent {
  @Input() index: number;
  @Input() form: SchemaFormGroup;
  @Input() schema: Object;
  keys = Object.keys;
}
