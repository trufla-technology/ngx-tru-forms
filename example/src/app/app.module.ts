import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JsonFormModule } from '@trufla-technology/ngx-tru-forms';
import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormModule,
    JsonSchemaExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
