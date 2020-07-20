import { JsonFormFieldsService } from '../json-form-fields.service';
import { Injectable } from '@angular/core';
import { ObjectComponent } from '../shared/components/object/object.component';
import { ArrayComponent } from '../shared/components/array/array.component';
import { TruUiStringComponent } from '../../fields/string/tru-ui-string/tru-ui-string.component';
import { TruUiButtonComponent } from '../../fields/button/tru-ui-button/tru-ui-button.component';
import { TruUiPhotoComponent} from '../../fields/photo/tru-ui-photo/tru-ui-photo.component';
@Injectable()
export class TruUi extends JsonFormFieldsService {
    fieldTypes = {
        string: TruUiStringComponent,
        // select: SelectComponent,
        // number: NumberComponent,
        // boolean: BooleanComponent,
        photo: TruUiPhotoComponent,
        // textarea: TextareaComponent,
        object: ObjectComponent,
        array: ArrayComponent,
        // date: DateComponent,
        // radiogroup: RadiogroupComponent,
        // checkboxgroup: CheckboxgroupComponent,
        // multiselect: MultiselectComponent,
        button: TruUiButtonComponent
      };
}
