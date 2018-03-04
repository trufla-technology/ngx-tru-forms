import { Schema } from '../../models/schema';
import { SchemaFormControl } from '../../models/schema-form-control';

export class CommonComponent {
  public control: SchemaFormControl;
  public schema: Schema;
  public style: {};

  public isRequired() {
    return this.control.validator !== null;
  }

  title() {
    return this.strToUpperCase(typeof this.schema.title === 'undefined' ? this.schema.key : this.schema.title);
  }

  strToUpperCase(str: string) {
    return str.toLowerCase().replace(/_/g, ' ').split(' ').map((word) =>
      (word.charAt(0).toUpperCase() + word.slice(1))
    ).join(' ');
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
    return this.schema.key + '_' +
      (i ? this.schema.enum[i].toString().replace(/\W+/g, '') : '');
  }

  getClass(defaultClass?) {
    return this.style.hasOwnProperty('default') ?
      this.style['default'] : (defaultClass || '');
  }
}
