import { Component } from '@angular/core';
import { ArrayComponent } from './array.component';

@Component({
  template: `
    <div [ngClass]="['array', control.schema.key]">
      <h6 *ngIf="getLegend(control).length" tabindex="0">{{getLegend(control)}}</h6>
      <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
        <div class="row">
          <div class="control" jf-component-chooser [form]="arrControl" [language]= "language"></div>
        </div>
      </div>
    </div>
  `
})
export class ArrayViewComponent extends ArrayComponent {
}
