import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      <input
        [name]="schema.key"
        type="checkbox"
        [formControl]="control"
      />
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
  `
})
export class BooleanComponent extends CommonComponent {}
