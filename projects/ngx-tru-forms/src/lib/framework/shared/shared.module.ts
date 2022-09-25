import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChooserComponent } from "./components/chooser/chooser.component";
import { FieldComponent } from "./components/field/field.component";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { InfoButtonComponent } from "./components/info-button/info-button.component";
import { TextareaViewComponent } from "../../fields/textarea/textarea.view.component";
import { RadiogroupViewComponent } from "../../fields/radiogroup/radiogroup.view.component";
import { SelectViewComponent } from "../../fields/select/select.view.component";
import { DateViewComponent } from "../../fields/date/date.view.component";
import { BooleanViewComponent } from "../../fields/boolean/boolean.view.component";
import { PhotoViewComponent } from "../../fields/photo/photo.view.component";
import { StringViewComponent } from "../../fields/string/string.view.component";
import { NumberViewComponent } from "../../fields/number/number.view.component";
import { CheckboxgroupViewComponent } from "../../fields/checkboxgroup/checkboxgroup.view.component";
import { ObjectComponent } from "./components/object/object.component";
import { MoneyViewComponent } from "../../fields/money/money.view.component";
import { MultiselectViewComponent } from "../../fields/multiselect/multiselect.view.component";
import { JsonFormComponent } from "../../json-form.component";
import { CommonComponent } from "../../fields/common/common.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from "ngx-mask";

import { ArrayComponent } from "./components/array/array.component";
import { ArrayViewComponent } from "./components/array/array.view.component";
import { DragAndDropDirective } from "./directive/drag-and-drop.directive";
import { ViewFileComponent } from "../../fields/view-file/view-file.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FieldModule } from "./components/field/field/field.module";
import { ChooserModule } from "./components/chooser/chooser/chooser.module";
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    PdfViewerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FieldModule,
    ChooserModule,
  ],
  declarations: [
    JsonFormComponent,
    CommonComponent,
    ViewFileComponent,
    FormButtonComponent,
    InfoButtonComponent,
    StringViewComponent,
    SelectViewComponent,
    NumberViewComponent,
    BooleanViewComponent,
    PhotoViewComponent,
    TextareaViewComponent,
    DateViewComponent,
    RadiogroupViewComponent,
    CheckboxgroupViewComponent,
    MultiselectViewComponent,
    MoneyViewComponent,
    ObjectComponent,
    ArrayComponent,
    ArrayViewComponent,
    DragAndDropDirective,
  ],
  exports: [
    ChooserComponent,
    FieldComponent,
    ChooserComponent,
    FormButtonComponent,
    InfoButtonComponent,
    JsonFormComponent,
    CommonComponent,
    ArrayComponent,
    ObjectComponent,
    DragAndDropDirective,
    ViewFileComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class SharedModule {}
