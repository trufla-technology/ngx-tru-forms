import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <button type="button" *ngIf="schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <select
      class="form-control"
      name="name"
      [formControl]="control"
      multiple="multiple"
    >
      <option
        *ngFor="let en of schema.enum; let i = index"
        [selected]="control.value === en"
        [ngValue]="en">
        {{enumNames(i)}}
      </option>
    </select>
  `
})
export class MultiselectComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
