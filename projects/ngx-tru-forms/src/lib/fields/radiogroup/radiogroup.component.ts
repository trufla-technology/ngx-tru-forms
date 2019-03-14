import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label
      [ngClass]="['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]">
      <span [innerHTML]="title()"></span><sup *ngIf="isRequired()">*</sup></label>
    <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <div [class]="getClass('radio-group')">
      <div *ngFor="let en of this.schema.enum; let i = index"
           [ngClass]="{'radio-container': true, 'checked': control.value === en}">
        <input
          type="radio"
          [attr.id]="getId(schema.key, en, schema.id)"
          [checked]="control.value === en"
          [name]="getName(schema.key)"
          [formControl]="control"
          [attr.disabled]="disabled"
          [value]="en" />
        <label
          [attr.for]="getId(schema.key, en, schema.id)"
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

  getId(key, val, formId) {
      return [formId, key, val.toString()].filter((f) => f.length).join('-');
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
