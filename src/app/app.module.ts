import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaEditorComponent } from './components/schema-editor/schema-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { SchemaDropdownComponent } from './components/schema-dropdown/schema-dropdown.component';
import { RouterModule, Routes } from '@angular/router';
import { FrameworkDropdownComponent } from './components/framework-dropdown/framework-dropdown.component';
import { JsonSchemaExamplesSamples } from './json-schema-examples/json-schema-examples.samples';
import { SubmittedDataComponent } from './components/submitted-data/submitted-data.component';
import { InputColourComponent } from './json-schema-examples/input-colour/input-colour.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {OverlayModule} from '@angular/cdk/overlay';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/tru-ui/tru-ui.module').then((m) => m.TruUiModuleExample)
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/bootstrap/bootstrap.module').then((m) => m.BootstrapModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./modules/material-design/material-design.module').then((m) => m.MaterialDesignModule)
  }
];

@NgModule({
    declarations: [
        AppComponent,
        SchemaEditorComponent,
        SchemaDropdownComponent,
        FrameworkDropdownComponent,
        SubmittedDataComponent,
        InputColourComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        MonacoEditorModule.forRoot(),
        TypeaheadModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        ColorPickerModule,
        OverlayModule
    ],
    providers: [
        JsonSchemaExamplesSamples
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
