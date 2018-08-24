import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div>
      <label [attr.class]="schema.key" [ngClass]="{'margin-bottom--half': true, required: isRequired()}">
        {{title()}}<sup *ngIf="isRequired()">*</sup></label>

      <mat-radio-group [formControl]="control" *ngFor="let enum of this.schema.enum; let i = index">
        <mat-radio-button
          [checked]="control.value === enum.toString()"
          [value]="enum.toString()"
        >
          {{enumNames(i)}}
        </mat-radio-button>
      </mat-radio-group>
    </div>
  `
})
export class RadiogroupMaterialComponent extends CommonComponent { }
