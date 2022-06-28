import {Component, Input} from '@angular/core';
import { ArrayComponent } from '../../framework/shared/components/array/array.component';
import { ChooserComponent } from '../../framework/shared/components/chooser/chooser.component';
@Component({
  template: `
    <mat-card [ngClass]="['object', control.schema.key]">
      <h6 *ngIf="getLegend(control).length">{{getLegend(control)}}</h6>
      <div class="array-items">
        <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
          <div class="row">
              <jf-component-chooser [form]="arrControl"> </jf-component-chooser>
            <button
              mat-button
              *ngIf="control.controls.length > 1"
              (click)="$event.preventDefault(); removeControl(control, i)"
              color="warn"
              class="remove"
            >Remove</button>
          </div>
        </div>
      </div>
      <div class="row">
        <button mat-button color="primary" (click)="$event.preventDefault(); addControl(control)">Add</button>
      </div>
    </mat-card>
  `
})

export class ArrayMaterialComponent extends ArrayComponent {}
