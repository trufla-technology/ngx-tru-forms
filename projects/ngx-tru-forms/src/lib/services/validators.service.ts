import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Injectable()
export class JsonFormValidatorsService {
  validators: Array<any>;

  constructor() {
    this.validators = [];
  }

  public get(prop, schema, path) {
    const dateValidator = function ageRangeValidator(control: AbstractControl) {
      if (control.value === null || (control.value !== null && isNaN(new Date(control.value).getDate()))) {
        return { customError: 'Please enter a valid date.' };
      }
      return null;
    };

    const emailValidator = function (control: AbstractControl) {
      /* tslint:disable-next-line:max-line-length */
      const mailRegex = `^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`;
      if (RegExp(mailRegex).test(control.value)) {
        return null;
      }
      return { customError: 'Please enter a valid email address' };
    };

    const required = schema.required || [];
    const field = schema.properties[prop];
    const varPath = [].concat(path, prop).join('.');

    if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
      return Validators.requiredTrue;
    }

    return Validators.compose(this.validators.concat([
      (this.has(varPath) ? this.validators[varPath] : null),
      (required.indexOf(prop) > -1 ? Validators.required : null),
      (field.hasOwnProperty('minLength') ? Validators.minLength(field.minLength) : null),
      (field.hasOwnProperty('maxLength') ? Validators.maxLength(field.maxLength) : null),
      (field.hasOwnProperty('format') && field.format === 'email' ? emailValidator : null),
      (field.hasOwnProperty('minimum') ? Validators.min(field.minimum) : null),
      (field.hasOwnProperty('maximum') ? Validators.max(field.maximum) : null),
      (field.format && field.format === 'date' ? dateValidator : null),
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
