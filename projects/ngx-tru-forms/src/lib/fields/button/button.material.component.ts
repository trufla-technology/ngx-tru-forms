import {Component } from '@angular/core';
import {ButtonComponent} from './button.component';

@Component({
  selector: 'jf-button',
  template: `
    <button
      mat-raised-button
      [color]="color"
      *ngIf="isVisible"
      [type]="type"
      [ngClass]="class"
      [disabled]="disabled"
      (click)="handleClick($event)">
      {{label}}
    </button>
  `
})
export class ButtonMaterialComponent extends ButtonComponent {}
