import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{'margin-bottom--half': true, required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup></label>
    <a *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</a>
    <div [class]="getClass('radio-group')">
      <div *ngFor="let enum of this.schema.enum; let i = index" class="radio-container">
        <input type="radio"
           [id]="id(i)"
           [checked]="control.value === enum"
           [name]="schema.key"
           [formControl]="control"
           [value]="enum" />
        <label
          [attr.for]="id(i)"
          [attr.class]="schema.key">
           {{enumNames(i)}}
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

