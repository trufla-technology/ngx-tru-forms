import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label
      [ngClass]="['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]">
      <span [innerHTML]="title()"></span><sup *ngIf="isRequired()">*</sup></label>
    <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <div [class]="getClass('radio-group')">
      <div *ngFor="let enum of this.schema.enum; let i = index"
           [ngClass]="{'radio-container': true, 'checked': control.value === enum}">
        <input
          type="radio"
          [attr.id]="getId(schema.key, enum)"
          [checked]="control.value === enum"
          [name]="getName(schema.key)"
          [formControl]="control"
          [value]="enum" />
        <label
          [attr.for]="getId(i, enum)"
          [attr.class]="schema.key">
           {{enumNames(i)}}
        </label>
      </div>
    </div>
    <jf-error [control]="control"></jf-error>
  `
})
export class RadiogroupComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  getId(key, val) {
      return `${key}-${val.toString()}`;
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
