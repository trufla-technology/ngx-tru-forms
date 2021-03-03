import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  template: `
  <p><span>{{placeholder()}}</span> <span>{{translateDate() | titlecase }}</span></p>
  `
})
export class DateViewComponent extends CommonComponent {
  numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ''));
  }
  translateDate() {
    return moment(this.control.value).locale(this.language).format('DD MMM, YYYY').replace('.', '')
  }
}
