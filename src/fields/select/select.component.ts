import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <select
      class="form-control"
      name="name"
      [formControl]="control"
    >
      <option value="" [selected]="control.value === ''" [disabled]="true">
        Select {{emptyOption()}}
      </option>
      <option
        *ngFor="let en of this.schema.enum; let i = index"
        [selected]="control.value === en"
        [ngValue]="en">
        {{enumNames(i)}}
      </option>
    </select>
  `
})
export class SelectComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  emptyOption() {
    return super.title().replace(/[^A-Z0-9]+$/ig, '');
  }
}
