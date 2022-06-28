import { Component, Input } from '@angular/core';
import { SchemaFormControl } from '../../../../models/schema-form-control';
import { AbstractControl, UntypedFormArray } from '@angular/forms';
import { SchemaFormArray } from '../../../../models/schema-form-array';
import { SchemaFormGroup } from '../../../../models/schema-form-group';
import { startCase } from 'lodash';

@Component({
  template: `
    <div [ngClass]="['array', control.schema.key]">
      <h4 *ngIf="getLegend(control).length" style="color:#8c8c8c;margin-top: 20px;font-size: 14px;" tabindex="0">{{getLegend(control)}}</h4>
      <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
        <div class="row">
          <div class="control" >
            <jf-component-chooser [form]="arrControl" [language]= "language"></jf-component-chooser>
          </div>
          <div class="remove" *ngIf="control.controls.length > 1">
            <input type="button" (click)="removeControl(control, i)" class="btn btn-success btn-sm" value="Remove"/>
          </div>
        </div>
      </div>
      <div class="row add">
        <div class="col-12">
          <input type="button" (click)="addControl(control)" class="btn btn-success btn-sm" value="Add"/>
        </div>
      </div>
    </div>
  `
})
export class ArrayComponent {
  @Input() control: SchemaFormArray;
  @Input() language;

  getLegend(control) {
    // return (control && control.schema && control.schema.key) ? startCase(control.schema.key) : '';
    // eslint-disable-next-line max-len
    return (typeof control.schema.title === 'undefined' ? control.schema.key : (this.getTranslation(control.schema.title) ? this.getTranslation(control.schema.title) : startCase(control.schema.key)));
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

  strToUpperCase(str: string) {
    return str.toLowerCase().replace(/_/g, ' ').split(' ').map((word) =>
      (word.charAt(0).toUpperCase() + word.slice(1))
    ).join(' ');
  }

  getEnabledControls(control) {
    if (Array.isArray(control.controls)) {
      return control.controls.filter((c) => c.enabled);
    }

    return control;
  }

  cloneControl(control: AbstractControl) {
    let newControl: AbstractControl;

    if (control instanceof SchemaFormGroup) {
      const formGroup = new SchemaFormGroup({}, control.validator, control.asyncValidator);
      const controls = control.controls;
      formGroup.schema = control.schema;

      Object.keys(controls).forEach((key) => {
        formGroup.addControl(key, this.cloneControl(controls[key]));
      });

      newControl = formGroup;
    } else if (control instanceof SchemaFormArray) {
      const formArray = new SchemaFormArray([], control.validator, control.asyncValidator);
      control.controls.forEach((formControl) => {
        formArray.push(this.cloneControl(formControl));
        return formArray;
      });

      newControl = formArray;
      (<SchemaFormArray>newControl).schema = control.schema;
    } else if (control instanceof SchemaFormControl) {
      newControl = new SchemaFormControl(control.value, control.validator, control.asyncValidator);
      (<SchemaFormControl>newControl).schema = control.schema;
    } else {
      throw new Error('Error: unexpected control value');
    }

    if (control.disabled) {
      newControl.disable({emitEvent: false});
    }
    newControl.reset();
    return newControl;
  }

  addControl(formArray: UntypedFormArray) {
    formArray.push(this.cloneControl(formArray.controls[0]));
  }

  removeControl(formArray: UntypedFormArray, index: number) {
    if (formArray.length === 1) {
      formArray.controls[0].reset();
      formArray.controls[0].disable();
    } else {
      formArray.removeAt(index);
    }
  }
}
