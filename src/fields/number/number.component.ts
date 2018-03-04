import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]" *ngIf="type() !== 'hidden'">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [attr.placeholder]="placeholder()"
    />
    <jf-info-button
      *ngIf="type() !== 'hidden'"
      [title]="schema.description"></jf-info-button>
  `
})
export class NumberComponent extends CommonComponent { }
