import { Component } from '@angular/core';
import {CommonComponent} from '../../../fields/common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [style.background]="color"
      [style.color]="color"
      [style.width]="'40px'"
    />
  `
})
export class ColourPickerComponent extends CommonComponent {
  color: '#0000ff';
}
