import { Component } from "@angular/core";
import { CommonComponent } from "../../common/common.component";

@Component({
  selector: "jf-tru-ui-multiselect",
  templateUrl: "./tru-ui-multiselect.component.html",
  styleUrls: ["../../../assets/tru-ui.css"],
})
export class TruUiMultiselectComponent extends CommonComponent {
  enumNames(index) {
    return typeof this.schema.enumNames === "undefined"
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }
}
