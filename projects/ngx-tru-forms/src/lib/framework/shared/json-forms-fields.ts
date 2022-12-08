import type { StringViewComponent } from "../../fields/string/string.view.component";
import type { SelectViewComponent } from "../../fields/select/select.view.component";
import type { NumberViewComponent } from "../../fields/number/number.view.component";
import type { BooleanViewComponent } from "../../fields/boolean/boolean.view.component";
import type { PhotoViewComponent } from "../../fields/photo/photo.view.component";
import type { TextareaViewComponent } from "../../fields/textarea/textarea.view.component";
import type { ObjectComponent } from "./components/object/object.component";
import type { ArrayViewComponent } from "./components/array/array.view.component";
import type { DateViewComponent } from "../../fields/date/date.view.component";
import type { RadiogroupViewComponent } from "../../fields/radiogroup/radiogroup.view.component";
import type { CheckboxgroupViewComponent } from "../../fields/checkboxgroup/checkboxgroup.view.component";
import type { MultiselectViewComponent } from "../../fields/multiselect/multiselect.view.component";
import type { MoneyViewComponent } from "../../fields/money/money.view.component";

export interface JsonFormsFields {
  string: StringViewComponent;
  select: SelectViewComponent;
  number: NumberViewComponent;
  boolean: BooleanViewComponent;
  photo: PhotoViewComponent;
  textarea: TextareaViewComponent;
  object: ObjectComponent;
  array: ArrayViewComponent;
  date: DateViewComponent;
  radiogroup: RadiogroupViewComponent;
  checkboxgroup: CheckboxgroupViewComponent;
  multiselect: MultiselectViewComponent;
  money: MoneyViewComponent;
  autocomplete: StringViewComponent;
}
