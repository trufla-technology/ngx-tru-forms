import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div class="select-container">
      <label
        [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
        <span [innerHTML]="title()"></span><sup *ngIf="isRequired()">*</sup>
      </label>
      <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
      <select
        class="form-control"
        name="name"
        [formControl]="control"
      >
        <option value="" [selected]="control.value === ''" [disabled]="true">
          {{emptyOption()}}
        </option>
        <option
          *ngFor="let en of this.schema.enum; let i = index"
          [selected]="control.value === en"
          [ngValue]="en">
          {{enumNames(i)}}
        </option>
      </select>
    </div>
    <jf-error [control]="control"></jf-error>
  `
})
export class SelectComponent extends CommonComponent {
  emptyOption() {
    return super.title().replace(/[^A-Z0-9]+$/ig, '');
  }
}
