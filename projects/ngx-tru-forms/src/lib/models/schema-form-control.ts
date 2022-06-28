import { UntypedFormControl } from '@angular/forms';
import { Schema } from './schema';

export class SchemaFormControl extends UntypedFormControl {
  public schema: Schema;
  public style: any;
  public viewOnly: boolean;
  public data: any;
  public isRequired: boolean;
  public language?: string;
}
