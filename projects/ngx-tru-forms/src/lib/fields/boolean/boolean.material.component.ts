import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <mat-slide-toggle
  [id]="schema.key"
  [name]="schema.key"
  [formControl]="control">
    {{title()}}
  </mat-slide-toggle>
  `
})
export class BooleanMaterialComponent extends CommonComponent {}
