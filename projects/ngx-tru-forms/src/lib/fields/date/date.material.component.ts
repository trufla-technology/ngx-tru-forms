import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";
import { DateAdapter } from "@angular/material/core";
import { MomentUtcDateAdapter } from "../../services/moment-utc-adapter.service";

@Component({
  template: `
    <mat-form-field color="primary">
      <input
        matInput
        [matDatepicker]="myDatepicker"
        (click)="myDatepicker.open()"
        [formControl]="control"
        [placeholder]="title(true)"
        [min]="minDate()"
        [max]="maxDate()"
        [disabled]="disabled"
        readonly
      />
      <mat-datepicker-toggle
        matSuffix
        [for]="myDatepicker"
      ></mat-datepicker-toggle>
      <mat-datepicker
        #myDatepicker
        [touchUi]="isMobile()"
        color="primary"
      ></mat-datepicker>
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
  `,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentUtcDateAdapter,
    },
  ],
})
export class DateMaterialComponent extends CommonComponent {
  isMobile() {
    return window.innerWidth <= 800;
  }

  minDate() {
    return isNaN(new Date(this.schema.minimum).getDate())
      ? null
      : new Date(this.schema.minimum);
  }

  maxDate() {
    return isNaN(new Date(this.schema.maximum).getDate())
      ? null
      : new Date(this.schema.maximum);
  }
}
