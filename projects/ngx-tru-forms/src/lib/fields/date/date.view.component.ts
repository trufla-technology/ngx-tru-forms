import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  template: `
  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>
  `
})
export class DateViewComponent extends CommonComponent {
  numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ''));
  }
}
