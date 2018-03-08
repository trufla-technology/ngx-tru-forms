import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div class="checkbox-group form-group">
      <label
        [attr.class]="schema.key"
        [ngClass]="{required: isRequired()}"
        *ngFor="let enum of this.schema.enum; let i = index">
        <a *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</a>
        <input type="checkbox"
          [checked]="control.value === enum"
          [name]="schema.key"
          [formControl]="control"
          [value]="enum" />
          {{enumNames(i)}}
        <sup *ngIf="isRequired()">*</sup>
      </label>
    </div>
  `
})
export class CheckboxgroupComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
