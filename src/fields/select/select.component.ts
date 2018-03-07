import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <a [attr.href]="'javascript:void(0)'"
       *ngIf="title" [attr.class]="'info'" [attr.title]="this.schema.description">Info</a>
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
  `
})
export class SelectComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
