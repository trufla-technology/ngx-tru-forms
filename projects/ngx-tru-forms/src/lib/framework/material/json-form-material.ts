import {Injectable} from '@angular/core';
import {CheckboxgroupComponent} from '../../fields/checkboxgroup/checkboxgroup.component';
import {ArrayComponent} from '../../fields/array/array.component';
import {MultiselectComponent} from '../../fields/multiselect/multiselect.component';
import {ObjectComponent} from '../../fields/object/object.component';
import {BooleanComponent} from '../../fields/boolean/boolean.component';
import {NumberComponent} from '../../fields/number/number.component';
import {PhotoComponent} from '../../fields/photo/photo.component';
import {RadiogroupComponent} from '../../fields/radiogroup/radiogroup.component';
import {MoneyComponent} from '../../fields/money/money.component';
import {StringMaterialComponent} from '../../fields/string/string.material.component';
import {JsonFormFieldsService} from '../json-form-fields.service';
import { TextareaMaterialComponent } from '../../fields/textarea/textarea.material.component';
import { SelectMaterialComponent } from '../../fields/select/select.material.component';

@Injectable()
export class JsonFormMaterial extends JsonFormFieldsService {
  fieldTypes = {
    string: StringMaterialComponent,
    select: SelectMaterialComponent,
    number: NumberComponent,
    boolean: BooleanComponent,
    photo: PhotoComponent,
    textarea: TextareaMaterialComponent,
    object: ObjectComponent,
    array: ArrayComponent,
    radiogroup: RadiogroupComponent,
    checkboxgroup: CheckboxgroupComponent,
    multiselect: MultiselectComponent,
    money: MoneyComponent
  };
}
