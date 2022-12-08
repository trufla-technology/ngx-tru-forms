import { Component } from "@angular/core";
import { CommonComponent } from "../../common/common.component";

@Component({
  selector: "jf-tru-ui-radigroup",
  templateUrl: "./tru-ui-radigroup.component.html",
  styleUrls: ["../../../assets/tru-ui.css"],
})
export class TruUiRadigroupComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  getId(key, val, formId) {
    return [formId, key, val.toString()].filter((f) => f.length).join("-");
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
