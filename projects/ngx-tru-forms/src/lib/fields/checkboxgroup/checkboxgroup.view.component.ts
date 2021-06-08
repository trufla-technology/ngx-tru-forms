import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p tabindex="0">{{title()}}</p>
    <ul *ngFor="let selected of control.value" >
      <li tabindex="0" *ngIf="selected">{{selected}}</li>
    </ul>
  `
})
export class CheckboxgroupViewComponent extends CommonComponent {}
