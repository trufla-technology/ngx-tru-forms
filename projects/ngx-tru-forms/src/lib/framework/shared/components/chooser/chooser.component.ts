import { Component, Input } from '@angular/core';
import { SchemaFormGroup } from '../../../../models/schema-form-group';
import { Schema } from '../../../../models/schema';

@Component({
  selector: 'jf-component-chooser, [jf-component-chooser]',
  template: `
  <div style="margin-bottom: 20px">
    <h2 style="color: #8C8C8C;font-size:16px" *ngIf="schema && schema.hasOwnProperty('title') && !nested">
      {{schema.title}}
    </h2>
    <h4 style="color: #8C8C8C;font-size:14px" *ngIf="schema && schema.hasOwnProperty('title') && nested">
      {{schema.title}}
    </h4>
    <div style="color: #8C8C8C;font-size:14px" class="description" *ngIf="schema && schema.hasOwnProperty('description')" [innerHTML]="schema.description"></div>
    </div> 
    <div [ngClass]="['form-container']">
      <div *ngFor="let control of keys(form.controls)" jf-field [control]="form.get(control)"></div>
    </div>
  `
})
export class ChooserComponent {
  @Input() form: SchemaFormGroup;
  @Input() schema: Schema;
  @Input() nested = false;
  keys = Object.keys;
}
