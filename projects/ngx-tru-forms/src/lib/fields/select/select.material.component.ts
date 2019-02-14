import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `

  <mat-form-field>
    <mat-select
      class="form-control"
      [attr.name]="schema.key"
      [formControl]="control"
      placeholder="{{title(true)}}"
    >
      <mat-option [disabled]="true">
          {{placeholder()}}
      </mat-option>
      <mat-option *ngFor="let en of this.schema.enum; let i = index" [value]="en">
          {{enumNames(i)}}
      </mat-option>
    </mat-select>
    <mat-error jf-error [control]="control"></mat-error>
  </mat-form-field>

  `
})
export class SelectMaterialComponent extends CommonComponent {}
