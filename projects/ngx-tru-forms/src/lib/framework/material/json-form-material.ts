import {Injectable} from '@angular/core';
import {CheckboxgroupComponent} from '../../fields/checkboxgroup/checkboxgroup.component';
import {ArrayComponent} from '../../fields/array/array.component';
import {MultiselectComponent} from '../../fields/multiselect/multiselect.component';
import {ObjectComponent} from '../../fields/object/object.component';
import {TextareaComponent} from '../../fields/textarea/textarea.component';
import {SelectComponent} from '../../fields/select/select.component';
import {BooleanComponent} from '../../fields/boolean/boolean.component';
import {NumberComponent} from '../../fields/number/number.component';
import {PhotoComponent} from '../../fields/photo/photo.component';
import {RadiogroupComponent} from '../../fields/radiogroup/radiogroup.component';
import {MoneyComponent} from '../../fields/money/money.component';
import {StringMaterialComponent} from '../../fields/string/string.material.component';
import {JsonFormFieldsService} from '../json-form-fields.service';

@Injectable()
export class JsonFormMaterial extends JsonFormFieldsService {
  fieldTypes = {
    string: StringMaterialComponent,
    select: SelectComponent,
    number: NumberComponent,
    boolean: BooleanComponent,
    photo: PhotoComponent,
    textarea: TextareaComponent,
    object: ObjectComponent,
    array: ArrayComponent,
    radiogroup: RadiogroupComponent,
    checkboxgroup: CheckboxgroupComponent,
    multiselect: MultiselectComponent,
    money: MoneyComponent
  };
}
