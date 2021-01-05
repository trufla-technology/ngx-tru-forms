import { Component } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { MomentUtcDateAdapter } from '../../../services/moment-utc-adapter.service';

@Component({
  selector: 'jf-tru-ui-date',
  templateUrl: './tru-ui-date.component.html',
  styleUrls: ['../../../assets/tru-ui.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentUtcDateAdapter
    }
  ]
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
    const date = moment.utc(e).format('YYYY-MM-DD');
    if (e && date !== this.oldValue) {
    const newDate = new Date(`${moment.utc(e).format('YYYY-MM-DD')}T00:00:00.000Z`);
    this.oldValue = moment.utc(e).format('YYYY-MM-DD');
    this.control.setValue(newDate);
    }
  }
}
