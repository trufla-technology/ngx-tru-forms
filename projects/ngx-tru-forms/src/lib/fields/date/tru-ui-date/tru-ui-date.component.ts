import { Component, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonComponent } from '../../common/common.component';
import * as moment_ from 'moment';
import * as momentTimeZone from 'moment-timezone';
import { MatCalendar } from '@angular/material/datepicker';
const localTimeZone = momentTimeZone.tz.guess();
const moment = moment_;
@Component({
  selector: 'jf-tru-ui-date',
  templateUrl: './tru-ui-date.component.html',
  styleUrls: ['../../../assets/tru-ui.css'],
})
export class TruUiDateComponent extends CommonComponent implements AfterViewInit {
  oldValue;
  show = false;
  selectedMonth;
  minDate;
  maxDate;
  @ViewChild(MatCalendar, { static: false }) calendar;
  excludeArray = [
    'mat-calendar-body-cell-content mat-calendar-body-today',
    'mat-calendar-body-cell-content',
    'mat-calendar-body-today',
    'mat-calendar-body-cell-content mat-calendar-body-selected',
    'mat-calendar-period-button mat-button mat-button-base'
  ];

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
     if (event.code === 'Escape') {
      this.show = false;
    }
  }

  ngAfterViewInit() {
    this._adapter.setLocale(this.language || 'en');
    if (this.control.data) {
      this.selectedMonth = new Date(this.control.data);
      this.calendar.activeDate = new Date(this.control.data);
    }
    this.minDate = isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
    this.maxDate = isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
    this.cd.detectChanges();

  }

  isMobile() {
    return window.innerWidth <= 800;
  }

  onDateInput(e) {
    if (!e) {
      return;
    }
    const date = moment(e).locale(this.language || 'en').utc(e).tz(localTimeZone).format('YYYY-MM-DD');
    if (e && `${date}` !== `${this.oldValue}`) {
      this.oldValue = date;
      this.control.setValue(date);
      this.selectedMonth = new Date(e);
      this.show = false;
      this.calendar.activeDate = new Date(e);
      this.cd.detectChanges();
    }
  }

  outsideClick(hasClickedOutside) {
    this.show = hasClickedOutside ? this.excludeDomElements(hasClickedOutside.target.className) : true;
  }

  excludeDomElements(domElement) {
    return this.excludeArray.includes(`${domElement}`) ? true : false;
  }
}
