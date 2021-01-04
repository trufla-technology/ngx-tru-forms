import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <p><span>{{placeholder()}}</span> <span>{{getSelectedEnumName()}}</span></p>
  `
})
export class RadiogroupViewComponent extends CommonComponent { }
