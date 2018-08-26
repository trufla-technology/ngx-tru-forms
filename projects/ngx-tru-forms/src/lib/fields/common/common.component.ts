import { Schema } from '../../models/schema';
import { SchemaFormControl } from '../../models/schema-form-control';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import startCase from 'lodash.startcase';

@Component({
  selector: 'jf-component',
  template: ''
})
export class CommonComponent {
  public control: SchemaFormControl;
  public schema: Schema;
  public style: {};

  constructor(
    public sanitizer: DomSanitizer
  ) {}

  isRequired() {
    return this.control.validator !== null;
  }

  title() {
    return typeof this.schema.title === 'undefined'
      ? this.strToUpperCase(this.schema.key) : this.schema.title;
  }

  strToUpperCase(str: string) {
    return startCase(str);
  }

  placeholder() {
    return this.schema.title || this.strToUpperCase(this.schema.key);
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
      : this.schema.enumNames[index];
  }
}
