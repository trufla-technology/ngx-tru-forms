import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";

@Component({
  template: `
    <mat-form-field>
      <input
        matInput
        [name]="schema.key"
        [attr.type]="'number'"
        [formControl]="control"
        [attr.placeholder]="placeholder()"
        [placeholder]="title(true)"
        [disabled]="disabled"
      />
      <mat-error jf-error [control]="control"></mat-error>
    </mat-form-field>
  `,
})
export class NumberMaterialComponent extends CommonComponent {}
