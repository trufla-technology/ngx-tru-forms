import {Component, Input } from '@angular/core';
import {SchemaFormControl} from '../../models/schema-form-control';
import {FormArray, FormGroup} from '@angular/forms';
import {SchemaFormArray} from '../../models/schema-form-array';

@Component({
  template: `
    <div>
      <h6 *ngIf="getLegend(control).length">{{getLegend(control)}}</h6>
      <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
        <div class="row">
          <div class="control" jf-component-chooser [form]="arrControl"></div>
          <div class="remove">
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

  addControl(formArray: FormArray) {
    const newRow = Object.keys(formArray.controls[0]['controls']).reduce((prev, next) => {
      const formGroup = formArray.controls[0]['controls'];
      let newControl = null;

      if (formGroup[next].controls) {
        newControl = new SchemaFormArray(formGroup[next].controls);
      } else {
        newControl = new SchemaFormControl('', formGroup[next].validator);
      }

      newControl.schema = formGroup[next].schema;
      newControl.key = formGroup[next].key;
      prev[next] = newControl;
      return prev;
    }, {});

    formArray.push(new FormGroup(newRow));
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
