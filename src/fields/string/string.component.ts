import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]" *ngIf="type() !== 'hidden'">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <button *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [attr.maxLength]="schema.maxLength || null"
      [attr.minLength]="schema.minLength || null"
      [attr.placeholder]="placeholder()"
      [textMask]="{ mask: getMask() }"
    />
  `
})
export class StringComponent extends CommonComponent { }
