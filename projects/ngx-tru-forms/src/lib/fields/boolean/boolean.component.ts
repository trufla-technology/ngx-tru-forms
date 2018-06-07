import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div [class]="getClass('checkbox-group')">
      <div class="checkbox-container">
        <input
          [id]="schema.key"
          [name]="schema.key"
          type="checkbox"
          [formControl]="control"
        />
        <label [attr.for]="schema.key" [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
          {{title()}}<sup *ngIf="isRequired()">*</sup>
        </label>
      </div>
    </div>
  `
})
export class BooleanComponent extends CommonComponent {}
