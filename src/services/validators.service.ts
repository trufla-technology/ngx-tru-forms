import { Injectable } from '@angular/core';
import { ValidatorFn, Validators} from '@angular/forms';

@Injectable()
export class JsonFormValidatorsService {
  validators: Array<any>;

  constructor() {
    this.validators = [];
  }

  public get(prop, schema) {
    const required = schema.required || [];
    const field = schema.properties[prop];
    return Validators.compose(this.validators.concat([
      (required.indexOf(prop) > -1 ? Validators.required : null),
      (field.hasOwnProperty('minLength') ? Validators.minLength(field.minLength) : null),
      (field.hasOwnProperty('maxLength') ? Validators.maxLength(field.maxLength) : null),
      (field.hasOwnProperty('format') && field.format === 'email' ? Validators.email : null),
      (field.hasOwnProperty('minimum') ? Validators.min(field.minimum) : null),
      (field.hasOwnProperty('maximum') ? Validators.max(field.maximum) : null),
      (field.pattern ? Validators.pattern(field.pattern) : null)
    ]));
  }

  public register(validator: ValidatorFn) {
    this.validators.push(validator);
  }
}
