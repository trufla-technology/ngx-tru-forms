import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  template: ` <div [ngClass]="['object', control.schema.key]">
    <div
      jf-component-chooser
      [form]="control"
      [language]="language"
      [schema]="control?.schema"
      [tooltipEnabled]="tooltipEnabled"
      [nested]="true"
    ></div>
  </div>`,
  styleUrls: ["../../../../assets/tru-ui.css"],
})
export class ObjectComponent implements AfterViewInit {
  @Input() control: any;
  @Input() language;
  @Input() tooltipEnabled: boolean;
  constructor() {}

  ngAfterViewInit() {}
}
