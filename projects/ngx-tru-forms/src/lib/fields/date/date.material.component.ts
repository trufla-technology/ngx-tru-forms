import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <mat-form-field>
      <input
        matInput
        [matDatepicker]="myDatepicker"
        [formControl]="control"
        [placeholder]="title()"
      >
      <mat-datepicker-toggle matSuffix [for]="myDatepicker"></mat-datepicker-toggle>
      <mat-datepicker #myDatepicker></mat-datepicker>
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
  `
})
export class DateMaterialComponent extends CommonComponent {}
