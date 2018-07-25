import {Component, Input } from '@angular/core';
import {ArrayComponent} from './array.component';

@Component({
  template: `
    <div>
      <h6 *ngIf="getLegend(control).length">{{getLegend(control)}}</h6>
      <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
        <div class="row">
          <div jf-component-chooser [form]="arrControl"></div>
          <div>
            <button mat-button color="warn" (click)="removeControl(control, i)">Remove</button>
          </div>
        </div>
      </div>
      <div class="row">
        <button mat-button color="primary" (click)="addControl(control)">Add</button>
      </div>
    </div>
  `
})

export class ArrayMaterialComponent extends ArrayComponent {}
