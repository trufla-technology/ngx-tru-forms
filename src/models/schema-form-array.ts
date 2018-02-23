import { FormArray } from '@angular/forms';
import { Schema } from './schema';

export class SchemaFormArray extends FormArray {
  public schema: Schema;
  public layout: any;
}
