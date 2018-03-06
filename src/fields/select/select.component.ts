import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <select
      class="form-control"
      name="name"
      type="text"
      [formControl]="control"
    >
      <option value="" [selected]="control.value === ''" [disabled]="true">
        Select {{title()}}
      </option>
      <option
        [selected]="control.value === enum"
        *ngFor="let enum of this.schema.enum; let i = index"
        [ngValue]="enum">
        {{enumNames(i)}}
      </option>
    </select>
    <jf-info-button [title]="schema.description"></jf-info-button>
  `
})
export class SelectComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
