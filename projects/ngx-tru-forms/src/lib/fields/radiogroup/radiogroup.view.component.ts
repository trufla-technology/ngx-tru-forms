import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>
  `
})
export class RadiogroupViewComponent extends CommonComponent { }
