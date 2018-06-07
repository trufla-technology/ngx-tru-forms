import { Component, Input } from '@angular/core';
import { SchemaFormGroup } from '../../models/schema-form-group';
import { Schema } from '../../models/schema';

@Component({
  selector: 'jf-component-chooser, [jf-component-chooser]',
  template: `
    <h2 *ngIf="schema && schema.hasOwnProperty('title') && !nested">
      {{schema.title}}
    </h2>
    <h4 *ngIf="schema && schema.hasOwnProperty('title') && nested">
      {{schema.title}}
    </h4>
    <div class="form-container">
      <div class="description" *ngIf="schema && schema.hasOwnProperty('description')" [innerHTML]="schema.description"></div>
      <div
        *ngFor="let control of keys(form.controls)"
        jf-field
        [control]="form.get(control)"
        [index]="index"
      ></div>
    </div>
  `
})
export class ChooserComponent {
  @Input() index: number;
  @Input() form: SchemaFormGroup;
  @Input() schema: Schema;
  @Input() nested = false;
  keys = Object.keys;
}
