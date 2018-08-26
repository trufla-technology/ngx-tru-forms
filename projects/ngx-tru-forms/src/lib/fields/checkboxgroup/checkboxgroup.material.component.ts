import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <mat-checkbox
    *ngFor="let child of this.control['controls']; let i = index"
    [attr.id]="getId(i, schema.enum[i])"
    [checked]="child.value === schema.enum[i]"
    [name]="schema.key"
    [formControl]="child"
    (change)="setValue($event, i)"
    [value]="schema.enum[i]"
    >
        {{enumNames(i)}}
    </mat-checkbox>
  `
})
export class CheckboxgroupMaterialComponent extends CommonComponent {
  checkboxGroupValues = [];
  randomSuffix = Math.random().toString(36).substring(7);

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
