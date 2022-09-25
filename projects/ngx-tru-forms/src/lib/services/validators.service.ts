import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

@Injectable()
export class JsonFormValidatorsService {
  validators: Array<any>;

  constructor() {
    this.validators = [];
  }

  public get(prop, schema, path, lan) {
    const dateValidator = function ageRangeValidator(control: AbstractControl) {
      if (control.value !== "" && isNaN(new Date(control.value).getDate())) {
        return {
          customError:
            lan === "en"
              ? "Please enter a valid date"
              : "Veuillez entrer une date valide",
        };
      }
      return null;
    };

    const emailValidator = function (control: AbstractControl) {
      /* eslint-disable-next-line max-len */
      const mailRegex = `^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`;
      if (!control.value || RegExp(mailRegex).test(control.value)) {
        return null;
      }
      return {
        customError:
          lan === "en"
            ? "Please enter a valid email address"
            : "Veuillez saisir une adresse e-mail valide",
      };
    };

    const phoneNumberValidator = function (control: AbstractControl) {
      const phoneNumberRegex = RegExp("^[+]*([(]+[0-9]{2,4}[)]+)?[-0-9]{8,}$");
      if (!control.value || phoneNumberRegex.test(control.value)) {
        return null;
      }
      // eslint-disable-next-line max-len
      return {
        customError:
          lan === "en"
            ? "Please enter a valid phone or mobile number"
            : "Veuillez entrer un numéro de téléphone ou mobile valide",
      };
    };

    const required = schema.required || [];
    const field = schema.properties[prop];
    const varPath = [].concat(path, prop).join(".");

    if (
      schema.properties[prop].type === "boolean" &&
      required.indexOf(prop) > -1
    ) {
      return Validators.requiredTrue;
    }

    return Validators.compose(
      this.validators.concat([
        this.has(varPath) ? this.validators[varPath] : null,
        required.indexOf(prop) > -1 ? Validators.required : null,
        field.hasOwnProperty("minLength")
          ? Validators.minLength(field.minLength)
          : null,
        field.hasOwnProperty("maxLength")
          ? Validators.maxLength(field.maxLength)
          : null,
        field.hasOwnProperty("format") && field.format === "email"
          ? emailValidator
          : null,
        field.hasOwnProperty("minimum") ? Validators.min(field.minimum) : null,
        field.hasOwnProperty("maximum") ? Validators.max(field.maximum) : null,
        field.format && field.format === "date" ? dateValidator : null,
        field.hasOwnProperty("format") && field.format === "tel"
          ? phoneNumberValidator
          : null,
        field.pattern ? Validators.pattern(field.pattern) : null,
      ])
    );
  }

  public register(field: any, validator: ValidatorFn) {
    this.validators[field] = validator;
  }

  public has(str) {
    return this.validators.hasOwnProperty(str);
  }
}
