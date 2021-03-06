import { Component } from '@angular/core';
import { CommonComponent } from '@trufla/ngx-tru-forms';

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
      [(colorPicker)]="color"
      [style.background]="color"
      [style.color]="color"
      [style.width]="'40px'"
      (colorPickerChange)="handleColorPickerChange($event)"
    />
  `
})
export class InputColourComponent extends CommonComponent {
  color: '#0000ff';

  handleColorPickerChange(val) {
    this.control.setValue(val);
  }
}
