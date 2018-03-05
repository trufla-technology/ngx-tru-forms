import { FormArray } from '@angular/forms';
import { SchemaFormArray } from '../../models/schema-form-array';
export declare class ArrayComponent {
    control: SchemaFormArray;
    getLegend(control: any): string;
    strToUpperCase(str: string): string;
    getEnabledControls(control: any): any;
    addControl(formArray: FormArray): void;
    removeControl(formArray: FormArray, index: number): void;
}
