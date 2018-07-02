import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <mat-form-field class="example-full-width">
        <textarea
            matInput
            [name]="schema.key"
            [attr.type]="type()"
            [formControl]="control"
            [attr.maxLength]="schema.maxLength || null"
            [attr.minLength]="schema.minLength || null"
            [attr.placeholder]="placeholder()"
            [textMask]="{ mask: getMask() }"
            [placeholder]="title()">
        </textarea>
    </mat-form-field>
  `
})
export class TextareaMaterialComponent extends CommonComponent { }

