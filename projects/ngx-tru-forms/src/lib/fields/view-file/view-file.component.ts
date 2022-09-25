import {
  Component,
  OnInit,
  Sanitizer,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { BsModalRef } from "ngx-bootstrap/modal";
import DOMPurify from "dompurify";
import { ValidationFeedbackTranslation } from "../error/validation-feedback-translation";
@Component({
  selector: "jf-view-file",
  templateUrl: "./view-file.component.html",
  styleUrls: ["./view-file.component.css"],
})
export class ViewFileComponent implements OnInit, OnDestroy {
  title: string;
  closeBtnName: string;
  file: any;
  isPdf: Boolean = true;
  pdfBody: string;
  mimeType;
  edocSrc;
  error = false;
  zoom = 1;
  language;
  constructor(
    private sanitizer: DomSanitizer,
    public bsModalRef: BsModalRef,
    private validationFeedbackTranslation?: ValidationFeedbackTranslation
  ) {}

  ngOnInit() {
    if (this.isPdf) {
      const bin64Data = window.atob((this.file + "").split("base64,")[1]);
      const len = bin64Data.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = bin64Data.charCodeAt(i);
      }
      this.edocSrc = bytes;
    }
  }

  onLoad() {
    const pdf = document.getElementsByClassName("ng2-pdf-viewer-container");
    pdf[0].setAttribute("tabindex", "0");
  }

  ngOnDestroy() {
    this.edocSrc = null;
    this.file = null;
  }

  makeTrustedImage(file): any {
    file = DOMPurify.sanitize(file);
    return this.sanitizer.bypassSecurityTrustResourceUrl(file);
  }

  onError(error) {
    this.error = true;
  }

  getTranslation(message) {
    return this.validationFeedbackTranslation[this.language][message];
  }

  zoomin() {
    const myImg = document.getElementById("image");
    const currWidth = myImg.clientWidth;
    if (currWidth === 2500) {
      return false;
    } else {
      myImg.style.width = currWidth + 100 + "px";
    }
  }

  zoomout() {
    const myImg = document.getElementById("image");
    const currWidth = myImg.clientWidth;
    if (currWidth === 100) {
      return false;
    } else {
      myImg.style.width = currWidth - 100 + "px";
    }
  }

  zoomPdfIn() {
    this.zoom = this.zoom + 0.25;
  }

  zoomPdfOut() {
    this.zoom = this.zoom - 0.25;
  }
}
