import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
