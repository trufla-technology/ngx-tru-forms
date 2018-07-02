import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <mat-radio-group [formControl]="control" *ngFor="let enum of this.schema.enum; let i = index">
  <mat-radio-button
      [attr.id]="getId(i, enum)"
      [checked]="control.value === enum"
      [name]="getName(schema.key)"
      [value]="enum"
  >
      {{enumNames(i)}}
  </mat-radio-button>
</mat-radio-group>
  `
})
export class RadiogroupMaterialComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  getId(i, val) {
      return `${i}-${val.replace(/[\W_]+/g, '')}+${this.randomSuffix}`;
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
