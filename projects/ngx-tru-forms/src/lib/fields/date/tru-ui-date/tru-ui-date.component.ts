import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { CommonComponent } from "../../common/common.component";
import moment from "moment";
import { MatCalendar } from "@angular/material/datepicker";
import { CdkOverlayOrigin } from "@angular/cdk/overlay";
@Component({
  selector: "jf-tru-ui-date",
  templateUrl: "./tru-ui-date.component.html",
  styleUrls: ["../../../assets/tru-ui.css"],
})
export class TruUiDateComponent
  extends CommonComponent
  implements AfterViewInit
{
  oldValue;
  show = false;
  selectedMonth;
  minDate;
  maxDate;
  isOpen = false;

  @ViewChild(MatCalendar) calendar;
  @ViewChild(CdkOverlayOrigin) calendarOverlay;

  ngAfterViewInit() {
    this.disabled = this.control.isDisabled
      ? this.control.isDisabled
      : this.disabled;
    this._adapter.setLocale(this.language || "en");
    if (this.control.data && this.calendar) {
      this.selectedMonth = new Date(this.control.data);
      this.calendar.activeDate = new Date(this.control.data);
    }
    this.minDate = isNaN(new Date(this.schema.minimum).getDate())
      ? null
      : new Date(this.schema.minimum);
    this.maxDate = isNaN(new Date(this.schema.maximum).getDate())
      ? null
      : new Date(this.schema.maximum);
    this.cd.detectChanges();
  }

  isMobile() {
    return window.innerWidth <= 800;
  }

  onDateInput(e) {
    if (!e) {
      return;
    }
    const date = moment(e)
      .locale(this.language || "en")
      .utc(e)
      .format("YYYY-MM-DD");
    if (e && `${date}` !== `${this.oldValue}`) {
      this.oldValue = date;
      this.control.setValue(date);
      this.selectedMonth = new Date(e);
      this.isOpen = false;
      this.calendar.activeDate = new Date(e);
      this.returnFocus();
      this.cd.detectChanges();
    }
  }
  close() {
    this.isOpen = false;
    this.returnFocus();
  }

  openCalendar(id) {
    if (this.disabled || this.control?.isDisabled) return;
    if (this.isOpen === false && !this.disabled) {
      this.isOpen = true;
      setTimeout(() => {
        const select = document.getElementById(id);
        if (select) {
          select.focus();
        }
      }, 100);
    } else {
      setTimeout(() => {
        const select = document.getElementById(
          this.schema.key + "_" + this.inputId
        );
        if (select) {
          this.isOpen = false;
          select.focus();
        }
      }, 100);
    }
  }

  returnFocus() {
    setTimeout(() => {
      const select = document.getElementById(
        this.schema.key + "_" + this.inputId
      );
      if (select) {
        select.focus();
      }
    }, 150);
  }
}
