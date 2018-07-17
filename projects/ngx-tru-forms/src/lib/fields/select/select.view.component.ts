import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p><span>{{title()}}</span> <span>{{control.value}}</span></p>
  `
})
export class SelectViewComponent extends CommonComponent {
  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      : this.schema.enumNames[index];
  }

  emptyOption() {
    return super.title().replace(/[^A-Z0-9]+$/ig, '');
  }
}
