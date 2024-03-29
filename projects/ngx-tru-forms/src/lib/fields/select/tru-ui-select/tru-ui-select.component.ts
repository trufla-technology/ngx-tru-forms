import {
  Component,
  ViewChild,
  HostListener,
  AfterViewInit,
} from "@angular/core";
import { CommonComponent } from "../../common/common.component";
import { CdkOverlayOrigin } from "@angular/cdk/overlay";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "jf-tru-ui-select",
  templateUrl: "./tru-ui-select.component.html",
  styleUrls: ["../../../assets/tru-ui.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TruUiSelectComponent,
    },
  ],
})
export class TruUiSelectComponent
  extends CommonComponent
  implements AfterViewInit
{
  oldValue;
  show = false;
  isOpen = false;

  @ViewChild(CdkOverlayOrigin) calendarOverlay;
  returnFocus(e?) {
    setTimeout(() => {
      const select = document.getElementById(this.schema.key);
      if (select) {
        select.focus();
      }
    }, 100);
  }

  // @HostListener("document:keydown", ["$event"])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.code === "Escape") {
  //     this.isOpen = false;
  //   }
  // }

  ngAfterViewInit() {
    this.disabled = this.control.isDisabled
      ? this.control.isDisabled
      : this.disabled;
    this._adapter.setLocale(this.language || "en");
    if (this.control.data) {
      this.cd.detectChanges();
    }
  }

  isMobile() {
    return window.innerWidth <= 800;
  }

  setSelectVaule(en?) {
    if (en) {
      this.control.setValue(en);
    }
    this.close();
  }
  close(ev?) {
    this.isOpen = false;
    this.returnFocus();
  }
  getValueFromController(i) {
    return i ? this.enumNames(this.schema.enum.indexOf(i)) : "";
  }

  toggleOpen() {
    if (this.disabled || this.control?.isDisabled) return;
    this.isOpen = !this.isOpen;
  }
}
