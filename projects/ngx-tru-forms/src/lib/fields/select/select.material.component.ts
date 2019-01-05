import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `

  <mat-form-field>
    <mat-select
      class="form-control"
      name="name"
      [formControl]="control"
      placeholder="{{emptyOption()}}"
    >
      <mat-option [disabled]="true">
          {{emptyOption()}}
      </mat-option>
      <mat-option *ngFor="let en of this.schema.enum; let i = index" [value]="en">
          {{enumNames(i)}}
      </mat-option>
    </mat-select>
    <mat-error jf-error [control]="control"></mat-error>
  </mat-form-field>

  `
})
export class SelectMaterialComponent extends CommonComponent {
  emptyOption() {
    return super.title().replace(/[^A-Z0-9*]+$/ig, '');
  }
}
