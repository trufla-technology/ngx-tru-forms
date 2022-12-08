import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";

@Component({
  template: `
    <p tabindex="0">{{ title() }}</p>
    <ul *ngFor="let selected of control.value">
      <li tabindex="0">{{ selected }}</li>
    </ul>
  `,
})
export class MultiselectViewComponent extends CommonComponent {
  enumNames(index) {
    return typeof this.schema.enumNames === "undefined"
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
