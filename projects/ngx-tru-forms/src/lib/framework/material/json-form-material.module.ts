import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringMaterialComponent } from '../../fields/string/string.material.component';
import { JsonFormMaterial} from './json-form-material';
import { JsonFormFieldsService } from '../json-form-fields.service';
import { TextareaMaterialComponent } from '../../fields/textarea/textarea.material.component';
import { SelectMaterialComponent } from '../../fields/select/select.material.component';
import { RadiogroupMaterialComponent } from '../../fields/radiogroup/radiogroup.material.component';
import { CheckboxgroupMaterialComponent } from '../../fields/checkboxgroup/checkboxgroup.material.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  declarations: [
    StringMaterialComponent,
    TextareaMaterialComponent,
    SelectMaterialComponent,
    RadiogroupMaterialComponent,
    CheckboxgroupMaterialComponent
  ],
  entryComponents: [
    StringMaterialComponent,
    TextareaMaterialComponent,
    SelectMaterialComponent,
    RadiogroupMaterialComponent,
    CheckboxgroupMaterialComponent
  ],
  exports: [
    StringMaterialComponent,
    TextareaMaterialComponent,
    SelectMaterialComponent,
    RadiogroupMaterialComponent,
    CheckboxgroupMaterialComponent
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
