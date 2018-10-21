import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [formControl]="control"
      [placeholder]="placeholder()"
      [bsConfig]="bsConfig"
      bsDatepicker
    />
    <jf-error [control]="control"></jf-error>
  `
})
export class DateComponent extends CommonComponent {
  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'MM/DD/YYYY'
  };
}
