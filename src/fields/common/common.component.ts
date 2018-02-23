import { FormControl } from '@angular/forms';
import { Schema } from '../../models/schema';

export class CommonComponent {
  public control: FormControl;
  public schema: Schema;

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
    switch (this.schema.type) {
      case 'string':
        switch (this.schema.format) {
          case 'email':
            return 'Email address';
          default:
            return 'Text value';
        }
      case 'number':
        return 'Numeric value';
      default:
        return 'Text value';
    }
  }

  type() {
    let format = this.schema.format || 'text';

    switch (this.schema.type) {
      case 'number':
        format = 'number';
        break;
    }

    switch (format) {
      case 'photo':
        format = 'file';
    }

    return format;
  }
}
