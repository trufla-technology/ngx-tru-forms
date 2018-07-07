import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    JsonSchemaExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
