import { Component, Input } from "@angular/core";
import { SchemaFormControl } from "../../../../models/schema-form-control";

@Component({
  template: ` <div [ngClass]="['object', control.schema.key]">
    <jf-component-chooser
      [form]="control"
      [schema]="control.schema"
      [nested]="true"
    ></jf-component-chooser>
  </div>`,
  styleUrls: ["../../../../assets/tru-ui.css"],
})
export class ObjectComponent {
  @Input() control: SchemaFormControl;
  @Input() language;
}
