import { Injectable } from "@angular/core";
import { StringMaterialComponent } from "../../fields/string/string.material.component";
import { JsonFormFieldsService } from "../json-form-fields.service";
import { TextareaMaterialComponent } from "../../fields/textarea/textarea.material.component";
import { SelectMaterialComponent } from "../../fields/select/select.material.component";
import { RadiogroupMaterialComponent } from "../../fields/radiogroup/radiogroup.material.component";
import { PhotoMaterialComponent } from "../../fields/photo/photo.material.component";
import { NumberMaterialComponent } from "../../fields/number/number.material.component";
import { MultiselectMaterialComponent } from "../../fields/multiselect/multiselect.material.component";
import { CheckboxgroupMaterialComponent } from "../../fields/checkboxgroup/checkboxgroup.material.component";
import { BooleanMaterialComponent } from "../../fields/boolean/boolean.material.component";
import { DateMaterialComponent } from "../../fields/date/date.material.component";
import { ButtonMaterialComponent } from "../../fields/button/button.material.component";
import { MoneyComponent } from "../../fields/money/money.component";
import { ObjectComponent } from "../shared/components/object/object.component";
import { ArrayMaterialComponent } from "../../fields/array/array.material.component";

@Injectable()
export class JsonFormMaterial extends JsonFormFieldsService {
  fieldTypes = {
    string: StringMaterialComponent,
    select: SelectMaterialComponent,
    number: NumberMaterialComponent,
    boolean: BooleanMaterialComponent,
    photo: PhotoMaterialComponent,
    textarea: TextareaMaterialComponent,
    object: ObjectComponent,
    array: ArrayMaterialComponent,
    date: DateMaterialComponent,
    radiogroup: RadiogroupMaterialComponent,
    checkboxgroup: CheckboxgroupMaterialComponent,
    multiselect: MultiselectMaterialComponent,
    money: MoneyComponent,
    button: ButtonMaterialComponent,
  };
}
