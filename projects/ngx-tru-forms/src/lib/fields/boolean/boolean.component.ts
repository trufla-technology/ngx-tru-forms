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
          [attr.disabled]="disabled"
        />
        <label [attr.for]="schema.key" [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
          <span [innerHTML]="title()"></span><sup *ngIf="isRequired()">*</sup>
        </label>
      </div>
    </div>
    <jf-error [control]="control"></jf-error>
  `
})
export class BooleanComponent extends CommonComponent {}
