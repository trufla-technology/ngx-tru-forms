import { Component, ViewChild } from "@angular/core";
import { type ChooserComponent } from "../chooser/chooser.component";
import { ArrayComponent } from "./array.component";

@Component({
  template: `
    <div [ngClass]="['array', control.schema.key]">
      <h4 *ngIf="getLegend(control).length" tabindex="0">
        {{ getLegend(control) }}
      </h4>
      <div
        *ngFor="let arrControl of getEnabledControls(control); let i = index"
      >
        <div class="row">
          <div class="control">
            <ng-container
              *ngTemplateOutlet="
                componentChooser;
                context: { form: arrControl, language: language }
              "
            >
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ArrayViewComponent extends ArrayComponent {
  @ViewChild("componentChooser") componentChooser: ChooserComponent;
}
