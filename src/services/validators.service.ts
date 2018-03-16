import { Injectable } from '@angular/core';
import { ValidatorFn, Validators} from '@angular/forms';

@Injectable()
export class JsonFormValidatorsService {
  validators: Array<any>;

  constructor() {
    this.validators = [];
  }

  public get(prop, schema, path) {
    const required = schema.required || [];
    const field = schema.properties[prop];
    const varPath = [].concat(path, prop).join('.');

    if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
      return Validators.pattern('true');
    }

    return Validators.compose(this.validators.concat([
      (this.has(varPath) ? this.validators[varPath] : null),
      (required.indexOf(prop) > -1 ? Validators.required : null),
      (field.hasOwnProperty('minLength') ? Validators.minLength(field.minLength) : null),
      (field.hasOwnProperty('maxLength') ? Validators.maxLength(field.maxLength) : null),
      (field.hasOwnProperty('format') && field.format === 'email' ? Validators.email : null),
      (field.hasOwnProperty('minimum') ? Validators.min(field.minimum) : null),
      (field.hasOwnProperty('maximum') ? Validators.max(field.maximum) : null),
      (field.pattern ? Validators.pattern(field.pattern) : null)
    ]));
  }

  public register(field: any, validator: ValidatorFn) {
    this.validators[field] = validator;
  }

  public has(str) {
    return this.validators.hasOwnProperty(str);
  }
}
