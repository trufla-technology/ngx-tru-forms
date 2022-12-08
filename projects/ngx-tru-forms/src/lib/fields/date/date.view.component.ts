import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";
import moment from "moment";

@Component({
  template: `
    <p>
      <span tabindex="0">{{ title() }}</span>
      <span tabindex="0" *ngIf="control.value">{{
        translateDate() | titlecase
      }}</span>
    </p>
  `,
})
export class DateViewComponent extends CommonComponent {
  // numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ""));
  }
  translateDate() {
    return this.control.value
      ? moment(this.control.value)
          .locale(this.language)
          .format("DD MMM, YYYY")
          .replace(".", "")
      : "";
  }
}
