import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule,
  MatDatepickerModule, MatNativeDateModule, MatCardModule
} from '@angular/material';
import { StringMaterialComponent } from '../../fields/string/string.material.component';
import { JsonFormMaterial} from './json-form-material';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { TextareaMaterialComponent } from '../../fields/textarea/textarea.material.component';
import { SelectMaterialComponent } from '../../fields/select/select.material.component';
import { RadiogroupMaterialComponent } from '../../fields/radiogroup/radiogroup.material.component';
import { PhotoMaterialComponent } from '../../fields/photo/photo.material.component';
import { CheckboxgroupMaterialComponent } from '../../fields/checkboxgroup/checkboxgroup.material.component';
import { NumberMaterialComponent } from '../../fields/number/number.material.component';
import { MultiselectMaterialComponent } from '../../fields/multiselect/multiselect.material.component';
import { BooleanMaterialComponent } from '../../fields/boolean/boolean.material.component';
import { DateMaterialComponent } from '../../fields/date/date.material.component';
import { ErrorMaterialComponent } from '../../fields/error/error.material.component';
import { ButtonMaterialComponent } from '../../fields/button/button.material.component';
import { SharedModule} from '../shared/shared.module';
import { ArrayMaterialComponent } from '../../fields/array/array.material.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [
    StringMaterialComponent,
    TextareaMaterialComponent,
    SelectMaterialComponent,
    RadiogroupMaterialComponent,
    PhotoMaterialComponent,
    NumberMaterialComponent,
    MultiselectMaterialComponent,
    CheckboxgroupMaterialComponent,
    BooleanMaterialComponent,
    DateMaterialComponent,
    ErrorMaterialComponent,
    ButtonMaterialComponent,
    ArrayMaterialComponent
  ],
  entryComponents: [
    StringMaterialComponent,
    TextareaMaterialComponent,
    SelectMaterialComponent,
    RadiogroupMaterialComponent,
    PhotoMaterialComponent,
    NumberMaterialComponent,
    MultiselectMaterialComponent,
    CheckboxgroupMaterialComponent,
    BooleanMaterialComponent,
    DateMaterialComponent,
    ErrorMaterialComponent,
    ButtonMaterialComponent,
    ArrayMaterialComponent
  ]
})

export class JsonFormMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsonFormMaterialModule,
      providers: [
        {
          provide: JsonFormFieldsService,
          useClass: JsonFormMaterial,
          multi: true
        }
      ]
    };
  }
}
