import { Component } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import * as moment_ from 'moment';
import * as momentTimeZone from 'moment-timezone';
const localTimeZone = momentTimeZone.tz.guess();
const moment = moment_;
@Component({
  selector: 'jf-tru-ui-date',
  templateUrl: './tru-ui-date.component.html',
  styleUrls: ['../../../assets/tru-ui.css'],
})
export class TruUiDateComponent extends CommonComponent  {
  oldValue;
  isMobile() {
    return window.innerWidth <= 800;
  }

  minDate() {
    return isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
  }

  maxDate() {
    return isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
  }

  onDateInput(e) {
    if (!e) { 
      return; }
    const date = moment(e).locale(this.language || 'en').utc(e).tz(localTimeZone).format('YYYY-MM-DD');
    if (e && `${date}` !== `${this.oldValue}`) {
    this.oldValue = date;
    this.control.setValue(date);
    this.control.markAsTouched();
    }
  }
}
