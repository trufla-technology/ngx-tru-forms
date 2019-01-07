import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p>{{placeholder()}}</p>
    <ul *ngFor="let selected of control.value">
      <li>{{selected}}</li>
    </ul>
  `
})
export class CheckboxgroupViewComponent extends CommonComponent {}
