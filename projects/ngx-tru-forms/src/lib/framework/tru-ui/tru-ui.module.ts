import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { SharedModule } from '../shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TruUi } from './tru-ui';
import { TruUiButtonComponent } from '../../fields/button/tru-ui-button/tru-ui-button.component';
import { TruUiStringComponent } from '../../fields/string/tru-ui-string/tru-ui-string.component';
import { TextMaskModule } from 'angular2-text-mask';
import { TruUiErrorComponent } from '../../fields/error/tru-ui-error/tru-ui-error.component';
import { TruUiPhotoComponent } from '../../fields/photo/tru-ui-photo/tru-ui-photo.component';
import { TruUiTextareaComponent } from '../../fields/textarea/tru-ui-textarea/tru-ui-textarea.component';
import { TruUiBooleanComponent } from '../../fields/boolean/tru-ui-boolean/tru-ui-boolean.component';
import { TruUiDateComponent } from '../../fields/date/tru-ui-date/tru-ui-date.component';
import { TruUiSelectComponent } from '../../fields/select/tru-ui-select/tru-ui-select.component';
import { TruUiNumberComponent } from '../../fields/number/tru-ui-number/tru-ui-number.component';
import { TruUiRadigroupComponent } from '../../fields/radiogroup/tru-ui-radigroup/tru-ui-radigroup.component';
import { TruUiCheckboxgroupComponent } from '../../fields/checkboxgroup/tru-ui-checkboxgroup/tru-ui-checkboxgroup.component';
import { TruUiMultiselectComponent } from '../../fields/multiselect/tru-ui-multiselect/tru-ui-multiselect.component';
import { TruUiArrayComponent } from '../shared/components/array/tru-ui-array/tru-ui-array.component';
import { TruUiAutocompleteComponent } from '../../fields/autocomplete/tru-ui-autocomplete/tru-ui-autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [TruUiButtonComponent,
     TruUiStringComponent,
     TruUiErrorComponent,
     TruUiPhotoComponent,
     TruUiTextareaComponent,
     TruUiBooleanComponent,
     TruUiDateComponent,
     TruUiSelectComponent,
     TruUiNumberComponent,
     TruUiRadigroupComponent,
     TruUiCheckboxgroupComponent,
     TruUiMultiselectComponent,
     TruUiArrayComponent,
     TruUiAutocompleteComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TextMaskModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TypeaheadModule.forRoot()
  ],
  entryComponents: [
    TruUiButtonComponent,
    TruUiStringComponent,
    TruUiErrorComponent,
    TruUiPhotoComponent,
    TruUiTextareaComponent,
    TruUiBooleanComponent,
    TruUiDateComponent,
    TruUiSelectComponent,
    TruUiNumberComponent,
    TruUiRadigroupComponent,
    TruUiCheckboxgroupComponent,
    TruUiMultiselectComponent,
    TruUiArrayComponent,
    TruUiAutocompleteComponent
  ],
  exports: [
    TruUiButtonComponent,
    TruUiStringComponent,
    TruUiErrorComponent,
    TruUiPhotoComponent,
    TruUiTextareaComponent,
    TruUiBooleanComponent,
    TruUiDateComponent,
    TruUiSelectComponent,
    TruUiNumberComponent,
    TruUiRadigroupComponent,
    TruUiCheckboxgroupComponent,
    TruUiMultiselectComponent,
    TruUiArrayComponent,
    TruUiAutocompleteComponent
  ]
})
export class TruUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TruUiModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: TruUi,
          multi: true
        }
      ]
    };
  }
 }
