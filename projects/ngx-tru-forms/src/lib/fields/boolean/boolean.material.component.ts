import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <div class="slide-container">
      <mat-slide-toggle
      [id]="schema.key"
      [name]="schema.key"
      color="primary"
      [disabled]="disabled"
      [formControl]="control">{{title(true)}}</mat-slide-toggle>
    </div>
    <jf-error [control]="control"></jf-error>
  `
})
export class BooleanMaterialComponent extends CommonComponent {}
