import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  template: `
  <p><span tabindex="0">{{title()}}</span> <span tabindex="0" *ngIf="control.value">{{control.value}}</span></p>
  `
})
export class MoneyViewComponent extends CommonComponent {
  numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ''));
  }
}
