import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, isRequired() ? 'required' : '']">
      <span [innerHTML]="title()"></span>
    </label>
    <button
      type="button"
      *ngIf="this.schema.description"
      [attr.class]="'info'"
      [attr.title]="this.schema.description"
    >
      Info
    </button>
    <textarea
      class="form-control"
      [name]="schema.key"
      [formControl]="control"
      [attr.maxLength]="schema.maxLength || null"
      [attr.minLength]="schema.minLength || null"
      [attr.placeholder]="placeholder()"
      [attr.disabled]="disabled"
    ></textarea>
    <jf-error [control]="control"></jf-error>
  `,
})
export class TextareaComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  getId(i, val) {
    return `${i}-${val.toString().replace(/[\W_]+/g, "")}+${this.randomSuffix}`;
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
