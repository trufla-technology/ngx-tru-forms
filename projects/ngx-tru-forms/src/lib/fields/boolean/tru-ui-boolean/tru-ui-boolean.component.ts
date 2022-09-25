import { Component } from "@angular/core";
import { CommonComponent } from "../../common/common.component";

@Component({
  selector: "jf-tru-ui-boolean",
  templateUrl: "./tru-ui-boolean.component.html",
  styleUrls: ["../../../assets/tru-ui.css"],
})
export class TruUiBooleanComponent extends CommonComponent {
  labelId = Math.random().toString(36).substring(7);
  // accessibility tabindex click
  toggleValue(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      document
        .getElementById(`${this.schema.key + "_" + this.inputId}`)
        .click();
    }
  }
}
