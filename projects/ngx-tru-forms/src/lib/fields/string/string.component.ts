import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]" *ngIf="type() !== 'hidden' && design == 'bootstrap'">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <button type="button" *ngIf="this.schema.description && design == 'bootstrap'" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [attr.maxLength]="schema.maxLength || null"
      [attr.minLength]="schema.minLength || null"
      [attr.placeholder]="placeholder()"
      [textMask]="{ mask: getMask() }"
      *ngIf="design == 'bootstrap'"
    />

    <mat-form-field *ngIf="design == 'material'">
      <input matInput
        [name]="schema.key"
        [attr.type]="type()"
        [formControl]="control"
        [maxLength]="schema.maxLength || null"
        [minLength]="schema.minLength || null"
        [placeholder]="placeholder()"
        [textMask]="{ mask: getMask() }"
      >
    </mat-form-field>
  `
})
export class StringComponent extends CommonComponent { }
