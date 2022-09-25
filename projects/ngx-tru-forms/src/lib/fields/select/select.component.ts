import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";

@Component({
  template: `
    <div class="select-container">
      <label
        [ngClass]="['jf-label', schema.key, isRequired() ? 'required' : '']"
      >
        <span [innerHTML]="title()"></span>
      </label>
      <button
        type="button"
        *ngIf="schema.description"
        [attr.class]="'info'"
        [attr.title]="schema.description"
      >
        Info
      </button>
      <select
        class="form-control"
        [attr.name]="schema.key"
        [formControl]="control"
        [attr.disabled]="disabled"
      >
        <option value="" [selected]="control.value === ''" [disabled]="true">
          {{ placeholder() }}
        </option>
        <option
          *ngFor="let en of schema.enum; let i = index"
          [selected]="control.value === en"
          [ngValue]="en"
        >
          {{ enumNames(i) }}
        </option>
      </select>
    </div>
    <jf-error [control]="control"></jf-error>
  `,
})
export class SelectComponent extends CommonComponent {}
