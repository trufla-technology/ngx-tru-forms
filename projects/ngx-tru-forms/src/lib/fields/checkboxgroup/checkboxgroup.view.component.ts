import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p>{{title()}}:</p>
    <ul *ngFor="let selected of control.value">
      <li>{{selected}}</li>
    </ul>
  `
})
export class CheckboxgroupComponent extends CommonComponent {
  checkboxGroupValues = [];
  randomSuffix = Math.random().toString(36).substring(7);

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

  getId(i, val) {
    return `${i}-${val.replace(/[\W_]+/g, '')}+${this.randomSuffix}`;
  }
}
