import { Component } from "@angular/core";
import { CommonComponent } from "../common/common.component";

@Component({
  template: `
    <p>
      <span tabindex="0">{{ title() }}</span>
      <span *ngIf="control.value" tabindex="0">{{ control.value }}</span>
    </p>
  `,
})
export class BooleanViewComponent extends CommonComponent {}
