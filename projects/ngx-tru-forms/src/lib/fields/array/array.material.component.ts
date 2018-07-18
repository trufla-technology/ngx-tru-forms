import {Component, Input } from '@angular/core';
import {SchemaFormControl} from '../../models/schema-form-control';
import {FormArray, FormGroup} from '@angular/forms';
import {SchemaFormArray} from '../../models/schema-form-array';

@Component({
    template: `
        <div>
        <h6 *ngIf="getLegend(control).length">{{getLegend(control)}}</h6>
        <div *ngFor="let arrControl of getEnabledControls(control); let i = index;">
            <div>
            <div jf-component-chooser [index]="i"></div>
            <button mat-icon-button color="warn" (click)="removeControl(control, i)">
              <mat-icon>close</mat-icon>
            </button>
            </div>
        </div>
        <div class="row">
            <div>
              <button mat-button color="primary" (click)="addControl(control)"><mat-icon>add</mat-icon></button>
            </div>
        </div>
        </div>
    `
})

export class ArrayMaterialComponent {
    constructor() { }

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
