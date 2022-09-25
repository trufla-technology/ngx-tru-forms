import { UntypedFormArray } from "@angular/forms";
import { Schema } from "./schema";

export class SchemaFormArray extends UntypedFormArray {
  public schema: Schema;
  public style: any;
}
