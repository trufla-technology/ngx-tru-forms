import { UntypedFormGroup} from '@angular/forms';
import { Schema } from './schema';

export class SchemaFormGroup extends UntypedFormGroup {
  public schema: Schema;
  public style: any;
  language: any;
}
