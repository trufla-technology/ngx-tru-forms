import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="'date'"
      [formControl]="control"
      [placeholder]="placeholder()"
    />
    <jf-error [control]="control"></jf-error>
  `
})
export class DateComponent extends CommonComponent {}
