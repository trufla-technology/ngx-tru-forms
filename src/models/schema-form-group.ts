import { FormGroup} from '@angular/forms';
import { Schema } from './schema';

export class SchemaFormGroup extends FormGroup {
  public schema: Schema;
  public layout: any;
}
