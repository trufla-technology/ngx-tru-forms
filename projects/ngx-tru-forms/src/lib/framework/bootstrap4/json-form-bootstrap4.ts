import { Injectable } from '@angular/core';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { CheckboxgroupComponent } from '../../fields/checkboxgroup/checkboxgroup.component';
import { MultiselectComponent } from '../../fields/multiselect/multiselect.component';
import { TextareaComponent } from '../../fields/textarea/textarea.component';
import { SelectComponent } from '../../fields/select/select.component';
import { BooleanComponent } from '../../fields/boolean/boolean.component';
import { NumberComponent } from '../../fields/number/number.component';
import { PhotoComponent } from '../../fields/photo/photo.component';
import { RadiogroupComponent } from '../../fields/radiogroup/radiogroup.component';
import { StringComponent } from '../../fields/string/string.component';
import { DateComponent } from '../../fields/date/date.component';
import { ButtonComponent } from '../../fields/button/button.component';
import { MoneyComponent } from '../../fields/money/money.component';
import { ObjectComponent } from '../shared/components/object/object.component';
import { ArrayComponent } from '../shared/components/array/array.component';

@Injectable()
export class JsonFormBootstrap4 extends JsonFormFieldsService {
  fieldTypes = {
    string: StringComponent,
    select: SelectComponent,
    number: NumberComponent,
    boolean: BooleanComponent,
    photo: PhotoComponent,
    textarea: TextareaComponent,
    object: ObjectComponent,
    array: ArrayComponent,
    date: DateComponent,
    radiogroup: RadiogroupComponent,
    checkboxgroup: CheckboxgroupComponent,
    multiselect: MultiselectComponent,
    money: MoneyComponent,
    button: ButtonComponent
  };
}
