import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `

  <mat-form-field>
  <mat-select
    class="form-control"
    name="name"
    [formControl]="control"
    placeholder="Select {{emptyOption()}}"
  >
    <mat-option [disabled]="true">
        Select {{emptyOption()}}
    </mat-option>
    <mat-option *ngFor="let en of this.schema.enum; let i = index" [value]="en">
        {{enumNames(i)}}
    </mat-option>
  </mat-select>
</mat-form-field>

  `
})
export class SelectMaterialComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  emptyOption() {
    return super.title().replace(/[^A-Z0-9]+$/ig, '');
  }
}
