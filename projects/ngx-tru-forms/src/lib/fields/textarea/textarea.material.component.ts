import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <mat-form-field class="example-full-width">
      <textarea
          matInput
          [name]="schema.key"
          [formControl]="control"
          [attr.maxLength]="schema.maxLength || null"
          [attr.minLength]="schema.minLength || null"
          [attr.placeholder]="placeholder()"
          [placeholder]="title(true)">
      </textarea>
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
  `
})
export class TextareaMaterialComponent extends CommonComponent { }
