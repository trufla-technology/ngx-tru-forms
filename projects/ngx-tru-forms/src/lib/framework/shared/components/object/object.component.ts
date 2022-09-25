import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import { type ChooserComponent } from "../chooser/chooser.component";
@Component({
  template: ` <div [ngClass]="['object', control.schema.key]">
    <ng-template #componentChooser> ></ng-template>
  </div>`,
  styleUrls: ["../../../../assets/tru-ui.css"],
})
export class ObjectComponent implements AfterViewInit {
  @ViewChild("componentChooser") componentChooser: ChooserComponent;
  @Input() control: any;
  @Input() language;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.componentChooser.schema = this.control.schema;
    this.componentChooser.nested = true;
    this.componentChooser.form = this.control;
    this.componentChooser.language = this.language;
  }

  ngAfterViewInit() {
    this.componentChooser.schema = this.control.schema;
    this.componentChooser.nested = true;
    this.componentChooser.form = this.control;
    this.componentChooser.language = this.language;
    this.changeDetectorRef.detectChanges();
  }
}
