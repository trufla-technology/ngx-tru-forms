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
        [mask]="getMask() "
        [placeholder]="title(true)"
        [disabled]="disabled"
        (change)="isMatch()"

      />
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
    <div *ngIf="schema.verify" style="margin-top: 1rem">
    <mat-form-field>
          <input
          matInput
          [attr.type]="type()"
          [formControl]="confirmInput"
          [attr.maxLength]="schema.maxLength || null"
          [attr.minLength]="schema.minLength || null"
          [attr.disabled]="disabled"
          [attr.placeholder]="placeholder()"
          [placeholder]="getLanguage().confirm + title(true)"
          [mask]="getMask() "
          [disabled]="disabled"
          (change)="isMatch()"
          />
     <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
    </div>
  `
})
export class StringMaterialComponent extends CommonComponent { }
