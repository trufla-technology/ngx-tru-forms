import { JsonFormFieldsService } from '../json-form-fields.service';
import { Injectable } from '@angular/core';
import { ObjectComponent } from '../shared/components/object/object.component';
import { ArrayComponent } from '../shared/components/array/array.component';
import { TruUiStringComponent } from '../../fields/string/tru-ui-string/tru-ui-string.component';
import { TruUiButtonComponent } from '../../fields/button/tru-ui-button/tru-ui-button.component';
import { TruUiPhotoComponent} from '../../fields/photo/tru-ui-photo/tru-ui-photo.component';
import { TruUiTextareaComponent } from '../../fields/textarea/tru-ui-textarea/tru-ui-textarea.component';
import { TruUiBooleanComponent } from '../../fields/boolean/tru-ui-boolean/tru-ui-boolean.component';
import { TruUiDateComponent } from '../../fields/date/tru-ui-date/tru-ui-date.component';
import { TruUiSelectComponent } from '../../fields/select/tru-ui-select/tru-ui-select.component';
import { TruUiNumberComponent } from '../../fields/number/tru-ui-number/tru-ui-number.component';
import { TruUiRadigroupComponent } from '../../fields/radiogroup/tru-ui-radigroup/tru-ui-radigroup.component';
import { TruUiCheckboxgroupComponent } from '../../fields/checkboxgroup/tru-ui-checkboxgroup/tru-ui-checkboxgroup.component';
import { TruUiMultiselectComponent } from '../../fields/multiselect/tru-ui-multiselect/tru-ui-multiselect.component';
import { TruUiArrayComponent } from '../shared/components/array/tru-ui-array/tru-ui-array.component';
import {TruUiAutocompleteComponent} from '../../fields/autocomplete/tru-ui-autocomplete/tru-ui-autocomplete.component';
@Injectable()
export class TruUi extends JsonFormFieldsService {
    fieldTypes = {
        string: TruUiStringComponent,
        select: TruUiSelectComponent,
        number: TruUiNumberComponent,
        boolean: TruUiBooleanComponent,
        photo: TruUiPhotoComponent,
        textarea: TruUiTextareaComponent,
        object: ObjectComponent,
        array: TruUiArrayComponent,
        date: TruUiDateComponent,
        radiogroup: TruUiRadigroupComponent,
        checkboxgroup: TruUiCheckboxgroupComponent,
        multiselect: TruUiMultiselectComponent,
        button: TruUiButtonComponent,
        autocomplete: TruUiAutocompleteComponent
      };
}
