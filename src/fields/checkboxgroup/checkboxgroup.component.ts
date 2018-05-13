import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{'margin-bottom--half': true, required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup></label>
    <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <div [class]="getClass('checkbox-group')">
      <div *ngFor="let child of this.control['controls']; let i = index"
           [ngClass]="{'checkbox-container': true, 'checked': child.value === schema.enum[i]}">
        <input type="checkbox"
          [id]="id(i)"
          [checked]="child.value === schema.enum[i]"
          [name]="schema.key"
          [formControl]="child"
          (change)="setValue($event, i)"
          [value]="schema.enum[i]" />
        <label
          [attr.for]="id(i)"
          [attr.class]="schema.key">
          {{enumNames(i)}}
        </label>
      </div>
    </div>
  `
})
export class CheckboxgroupComponent extends CommonComponent {
  checkboxGroupValues = [];
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  setValue(event, index) {
    if (this.checkboxGroupValues.length === 0) {
      this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
    }

    if (this.checkboxGroupValues[index] === null) {
      event.target.value = this.schema.enum[index];
      this.checkboxGroupValues[index] = event.target.value;
    } else {
      this.checkboxGroupValues[index] = null;
    }

    this.control.setValue(this.checkboxGroupValues);
  }
}
