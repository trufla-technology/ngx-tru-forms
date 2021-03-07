import { Component, OnInit, Sanitizer, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import DOMPurify from 'dompurify';
import { ValidationFeedbackTranslation } from '../error/validation-feedback-translation';
@Component({
  selector: 'jf-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.css']
})
export class ViewFileComponent implements OnInit {
  title: string;
  closeBtnName: string;
  file: any;
  isPdf: Boolean = true;
  pdfBody: string;
  mimeType;
  edocSrc;
  error = false;
  language;
  constructor(private sanitizer: DomSanitizer,
    public bsModalRef: BsModalRef,
    private validationFeedbackTranslation?: ValidationFeedbackTranslation) {
   }

  ngOnInit() {
    if (this.isPdf) {
    this.mimeType = this.makeTrustedImage(this.file).toString().slice(5).split(';')[0];
    const bin64Data = window.atob((this.file + '').split('base64,')[1]);
    const len = bin64Data.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = bin64Data.charCodeAt(i);
    }
    this.edocSrc = bytes;
  }
  }

  makeTrustedImage(file): any {
    file =  DOMPurify.sanitize(file);
    return  this.sanitizer.bypassSecurityTrustResourceUrl(file);
  }

  onError(error) {
    this.error = true;
  }

  getTranslation(message) {
    return this.validationFeedbackTranslation[this.language][message];
  }
   zoomin() {
    const myImg = document.getElementById('image');
    const currWidth = myImg.clientWidth;
    if (currWidth === 2500) { return false; } else {
      myImg.style.width = (currWidth + 100) + 'px';
    }
  }

   zoomout() {
    const myImg = document.getElementById('image');
    const currWidth = myImg.clientWidth;
    if (currWidth === 100) { return false; } else {
      myImg.style.width = (currWidth - 100) + 'px';
    }
  }
}
