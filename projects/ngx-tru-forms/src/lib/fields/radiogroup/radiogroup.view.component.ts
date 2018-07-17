import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>
  `
})
export class RadiogroupViewComponent extends CommonComponent {
  randomSuffix = Math.random().toString(36).substring(7);

  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  getId(i, val) {
      return `${i}-${val.replace(/[\W_]+/g, '')}+${this.randomSuffix}`;
  }

  getName(key) {
    return `${key}-${this.randomSuffix}`;
  }
}
