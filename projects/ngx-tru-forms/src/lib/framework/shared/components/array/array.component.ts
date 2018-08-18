import {Component, Input } from '@angular/core';
import {SchemaFormControl} from '../../../../models/schema-form-control';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {SchemaFormArray} from '../../../../models/schema-form-array';
import { SchemaFormGroup } from '../../../../models/schema-form-group';

@Component({
  template: `
    <div [ngClass]="['array', control.schema.key]">
      <h6 *ngIf="getLegend(control).length">{{getLegend(control)}}</h6>
      <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
        <div class="row">
          <div class="control" jf-component-chooser [form]="arrControl"></div>
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

  getLegend(control) {
    return (control && control.schema && control.schema.key) ?
      this.strToUpperCase(control.schema.key) : '';
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

    return newControl;
  }

  addControl(formArray: FormArray) {
    formArray.push(this.cloneControl(formArray.controls[0]));
  }

  removeControl(formArray: FormArray, index: number) {
    if (formArray.length === 1) {
      formArray.controls[0].reset();
      formArray.controls[0].disable();
    } else {
      formArray.removeAt(index);
    }
  }
}
