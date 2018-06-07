import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div [class]="getClass()">
      <label ngClass="{required: isRequired()}">
        {{title()}}<sup *ngIf="isRequired()">*</sup>
      </label>
      <button type="button" *ngIf="this.schema.description" [attr.class]="'info'" [attr.title]="this.schema.description">Info</button>
      <textarea
        class="form-control"
        [name]="schema.key"
        [formControl]="control"
        [attr.maxLength]="schema.maxLength || null"
        [attr.minLength]="schema.minLength || null"
        [attr.placeholder]="placeholder()"
      ></textarea>
    </div>
  `
})
export class TextareaComponent extends CommonComponent { }

