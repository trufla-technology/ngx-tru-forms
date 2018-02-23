import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div class="radiogroup">
      <div>
        <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
          {{title()}}<sup *ngIf="isRequired()">*</sup></label>
      </div>
      <div>
        <label
          [attr.class]="schema.key"
          *ngFor="let enum of this.schema.enum; let i = index">
          <input type="radio"
            [checked]="control.value === enum"
            [name]="schema.key"
            [formControl]="control"
            [value]="enum" />
            {{enumNames(i)}}
          <sup *ngIf="isRequired()">*</sup>
        </label>
      </div>
    </div>
  `
})
export class RadiogroupComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
