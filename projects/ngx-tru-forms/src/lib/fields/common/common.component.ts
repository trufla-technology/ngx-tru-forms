import { Schema } from '../../models/schema';
import { SchemaFormControl } from '../../models/schema-form-control';
import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { startCase } from 'lodash';
import {ValidationFeedbackTranslation} from '../error/validation-feedback-translation';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

// defineLocale('fr', deLocale);

@Component({
  selector: 'jf-component',
  template: ''
})
export class CommonComponent implements AfterViewInit {
  control: SchemaFormControl;
  schema: Schema;
  style: {};
  disabled = false;
  language;
  isWebView = false;
  constructor(
    public sanitizer: DomSanitizer,
    public cd: ChangeDetectorRef,
    private localeService: BsLocaleService,
    private validationFeedbackTranslation: ValidationFeedbackTranslation
  ) {
    if ( (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) ) {
      this.isWebView = true;
     }
     defineLocale('fr', esLocale);
     this.localeService.use(this.language);
  }

  ngAfterViewInit() {
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
      ? key : (this.getTranslation(this.schema.title) ? this.getTranslation(this.schema.title) : key));
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

  enumNames(index) {
    return typeof(this.schema.enumNames) === 'undefined'
      ? this.schema.enum[index]
      :  this.getTranslation(this.schema.enumNames[index]);
  }

  getSelectedEnumName() {
    let index;
    this.schema.enum.map((e, i) => {
     if (e === this.control.value) {
       index = i;
     }
    });
    return index ? this.getTranslation(this.schema.enumNames[index]) : this.control.value;
  }

  getTranslation(titleArray) {
    if (Array.isArray(titleArray)) {
    const translatedTitle = titleArray.filter(val =>
       val.language === this.language
      );
      return translatedTitle[0] ? this.strToUpperCase(translatedTitle[0].value.replace(/<.*?>/g, '')) : false;
  } else {
    return titleArray;
  }
}

getLanguage() {
  return this.validationFeedbackTranslation.validation[this.language || 'en'];
}

getControlValue() {
  return this.control && this.control.value ? this.control.value : '';
}

getFilename() {
    if (this.getControlValue().length) {
    return this.getControlValue().substring("data:image/".length, this.getControlValue().indexOf(";base64")) || '';
    }
  }
}
