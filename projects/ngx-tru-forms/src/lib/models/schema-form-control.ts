import { FormControl } from '@angular/forms';
import { Schema } from './schema';

export class SchemaFormControl extends FormControl {
  public schema: Schema;
  public style: any;
  public viewOnly: boolean;
  public data: any;
}
