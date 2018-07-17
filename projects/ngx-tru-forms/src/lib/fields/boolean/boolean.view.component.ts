import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p>{{title()}}: {{control.value}}</p>
  `
})
export class BooleanViewComponent extends CommonComponent {}
