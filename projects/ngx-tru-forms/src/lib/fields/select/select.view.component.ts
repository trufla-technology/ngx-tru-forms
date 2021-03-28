import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p><span tabindex="0">{{placeholder()}}</span>
     <span tabindex="0" *ngIf="getSelectedEnumName()">{{getSelectedEnumName()}}</span></p>
  `
})
export class SelectViewComponent extends CommonComponent {}
