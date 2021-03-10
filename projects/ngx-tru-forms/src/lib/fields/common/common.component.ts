import { Schema } from '../../models/schema';
import { SchemaFormControl } from '../../models/schema-form-control';
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { upperFirst, startCase } from 'lodash';
import {ValidationFeedbackTranslation} from '../error/validation-feedback-translation';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import {NgxImageCompressService} from 'ngx-image-compress';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as moment_ from 'moment';
const moment = moment_;
@Component({
  selector: 'jf-component',
  template: ''
})
export class CommonComponent implements AfterViewInit {
  control: SchemaFormControl;
  confirmInput = new SchemaFormControl('');
  schema: Schema;
  style: {};
  disabled = false;
  language;
  isWebView = false;
  fileSize = null;
  maskDate;

  constructor(
    public sanitizer?: DomSanitizer,
    public cd?: ChangeDetectorRef,
    private localeService?: BsLocaleService,
    private validationFeedbackTranslation?: ValidationFeedbackTranslation,
    private imageCompress?: NgxImageCompressService,
    public modalService?: BsModalService
  ) {
    this.isWebView = this.detectWebView();
     defineLocale('fr', deLocale);
     this.localeService.use(this.language);
  }

  ngAfterViewInit() {
    if ( this.schema && this.schema.format === 'photo' && this.control.value ) {
       this.getImageFromUrl(this.control.value);
      }
    if (this.schema && this.schema.format === 'date' && this.control.data) {
      this.maskDate = new Date(this.control.data );
      this.control.setValue(this.maskDate);
    }
    this.localeService.use(this.language);
    this.cd.detectChanges();
  }

  isRequired() {
    // some controls like datepicker add validator without being required
    return this.control.validator !== null && this.control.isRequired;
  }

  title(material = false) {
    const required = this.isRequired() && material ? '*' : '';
    return (typeof this.schema.title === 'undefined'
      ? this.strToUpperCase(this.schema.key) : this.getTranslation(this.schema.title)) + required;
  }

  strToUpperCase(str: string) {
    return startCase(str);
  }

  placeholder() {
   const key = this.strToUpperCase(this.schema.key).replace(/<.*?>/g, '');
   return (typeof this.schema.title === 'undefined'
      ? startCase(key) : (this.getTranslation(this.schema.title) ? this.getTranslation(this.schema.title) : startCase(key)));
  }

  type() {
    let format = this.schema.format || 'text';

    switch (format) {
      case 'photo':
        format = 'file';
    }

    return format;
  }

  id(i?) {
    return this.schema.key + '-' + Math.random().toString(36).substring(7) + '-' + i;
  }

  getClass(defaultClass?) {
    return this.style && this.style.hasOwnProperty('default') ?
      this.style['default'] : (defaultClass || '');
  }

  getMask() {
    if (this.schema.hasOwnProperty('mask')) {
      const mask: Array<string | RegExp> = [];
      this.schema.mask.forEach((el) => {
        mask.push(/^\/.*\/$/.test(el) ? new RegExp(el.replace(/^\/|\/$/g, '')) : el);
      });

      return mask;
    }

    return false;
  }

  makeTrustedImage(image): any {
    const imageString =  JSON.stringify(image).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  makeTrustedHtml(html): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      :  this.getTranslation(this.schema.enumNames[index]);
  }

  getSelectedEnumName() {
    let index;
    this.schema.enum.map((e, i) => {
     if (e.toString().toLowerCase() === this.control.value.toString().toLowerCase()) {
       index = i;
     }
    });
    return this.schema.enumNames && this.schema.enumNames.length && typeof index !== 'undefined' ?
     this.getTranslation(this.schema.enumNames[index]) : this.control.value;
  }

  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
    const translatedTitle = titleArray.filter(val =>
       val.language === this.language
      );
      return translatedTitle[0] ? upperFirst(translatedTitle[0].value.replace(/<.*?>/g, '')) : false;
    } else {
      return startCase(titleArray);
    }
  }

  getLanguage() {
    this.language = this.language ? this.language : 'en';
    return this.validationFeedbackTranslation.validation[this.language];
  }

  getControlValue() {
    return this.control && this.control.value ? this.control.value : '';
  }

  getFilename() {
    if (this.getControlValue().length) {
    return this.getControlValue().substring('data:image/'.length, this.getControlValue().indexOf(';base64')) || '';
    }
  }

  isMatch() {
    if (this.schema.verify) {
      const input = this.control.value;
      const confirmInput = this.confirmInput.value;
      let error = this.control.errors && Object.keys(this.control.errors).length > 0 ? this.control.errors : null;
      if (error && Object.keys(this.control.errors).length > 0) {
         delete error.isMatch;
        if (Object.keys(error).length === 0) {
          error = null;
        }
      }
      return input.toString() === confirmInput.toString() ?
       this.control.setErrors(error) : this.control.setErrors({...this.control.errors, isMatch: true });
    }
  }

  validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  isPdf() {
    return this.control.value.toLowerCase().includes('application/pdf;base64');
  }
  getImageFromUrl(url: any) {
    fetch(url).then((r) => r.blob().then(s => this.fileSize = s.size).catch(() => this.fileSize = null)).catch(() => this.fileSize = null);
  }

  compressFile(file: any, size?) {
    const quality = size < 0.300 ? 80 : size < 0.900 ? 50 : 35;
   return this.imageCompress.compressFile(file, -2, quality, quality);
  }

  detectWebView() {
    const userAgent = window.navigator.userAgent.toLowerCase(),
    ios = /iphone|ipod|ipad/.test( userAgent );
    return ios;

  }
}
