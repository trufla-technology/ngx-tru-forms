import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>
  `
})
export class NumberViewComponent extends CommonComponent { }
