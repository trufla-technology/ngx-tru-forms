import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";
// import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  template: `
    <label [ngClass]="['jf-label', schema.key, isRequired() ? 'required' : '']">
      <span [innerHTML]="title()"></span>
    </label>
    <input
      class="form-control"
      [name]="schema.key"
      [attr.type]="'text'"
      [formControl]="control"
      [placeholder]="placeholder()"
      (input)="cleanMask($event.target.value)"
      [attr.disabled]="disabled"
    />
    <jf-error [control]="control"></jf-error>
  `,
})
export class MoneyComponent extends CommonComponent {
  // numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ""));
  }
}
