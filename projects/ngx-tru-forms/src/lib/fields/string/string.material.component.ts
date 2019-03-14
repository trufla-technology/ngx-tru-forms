import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <mat-form-field>
      <input
        matInput
        [attr.name]="schema.key"
        [attr.type]="type()"
        [formControl]="control"
        [attr.maxLength]="schema.maxLength || null"
        [attr.minLength]="schema.minLength || null"
        [attr.placeholder]="placeholder()"
        [textMask]="{ mask: getMask() }"
        [placeholder]="title(true)"
        [disabled]="disabled"
      />
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
  `
})
export class StringMaterialComponent extends CommonComponent { }
