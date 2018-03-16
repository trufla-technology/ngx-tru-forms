import { Component, OnInit } from '@angular/core';
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
      [attr.type]="'number'"
      [formControl]="control"
      [attr.placeholder]="placeholder()"
    />
  `
})
export class NumberComponent extends CommonComponent { }
