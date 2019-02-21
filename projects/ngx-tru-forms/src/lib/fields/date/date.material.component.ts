import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { DateAdapter } from '@angular/material';
import { MomentUtcDateAdapter } from '../../services/moment-utc-adapter.service';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  template: `
    <mat-form-field>
      <input
        matInput
        [matDatepicker]='myDatepicker'
        (click)="myDatepicker.open()"
        [formControl]='control'
        [placeholder]='title(true)'
        [min]="minDate()"
        [max]="maxDate()"
      >
      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>
      <mat-datepicker #myDatepicker></mat-datepicker>
      <mat-error jf-error [control]='control'></mat-error>
    </mat-form-field>
  `,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentUtcDateAdapter
    }
  ]
})
export class DateMaterialComponent extends CommonComponent {
  minDate() {
    return isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
  }

  maxDate() {
    return isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
  }
}
