import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, (isRequired() ? 'required' : '')]" *ngIf="type() !== 'hidden'">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <a *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</a>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="type()"
      [formControl]="control"
      [attr.placeholder]="placeholder()"
    />
  `
})
export class NumberComponent extends CommonComponent { }
