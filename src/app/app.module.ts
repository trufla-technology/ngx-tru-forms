import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaEditorComponent } from './components/schema-editor/schema-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {FormsModule} from '@angular/forms';
import { SchemaDropdownComponent } from './components/schema-dropdown/schema-dropdown.component';
import {RouterModule, Routes} from '@angular/router';
import { FrameworkDropdownComponent } from './components/framework-dropdown/framework-dropdown.component';
import {BootstrapModule} from './modules/bootstrap/bootstrap.module';
import {MaterialDesignModule} from './modules/material-design/material-design.module';
import {JsonSchemaExamplesSamples} from './json-schema-examples/json-schema-examples.samples';
import { SubmittedDataComponent } from './components/submitted-data/submitted-data.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/material-design/material-design.module').then((m) => m.MaterialDesignModule)
  },
  {
    path: 'bootstrap-example',
    loadChildren: () => import('./modules/bootstrap/bootstrap.module').then((m) => m.BootstrapModule)
  },
  // {
  //   path: 'material-design-example',
  //   redirectTo: ''
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    SchemaEditorComponent,
    SchemaDropdownComponent,
    FrameworkDropdownComponent,
    SubmittedDataComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // JsonSchemaExamplesModule,
    RouterModule.forRoot(routes),
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [
    JsonSchemaExamplesSamples
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
