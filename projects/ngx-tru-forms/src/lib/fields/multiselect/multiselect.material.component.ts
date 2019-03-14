import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <mat-form-field>
    <mat-select
      [formControl]="control"
      name="name"
      [disabled]="disabled"
      multiple>
      <mat-option
        *ngFor="let en of schema.enum; let i = index"
        [value]="en">
        {{enumNames(i)}}
      </mat-option>
    </mat-select>
    <mat-error jf-error [control]="control"></mat-error>
  </mat-form-field>
  `
})
export class MultiselectMaterialComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
