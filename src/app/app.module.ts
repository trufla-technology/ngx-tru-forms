import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TruUiExampleModule } from './tru-ui-example/tru-ui-example.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    JsonSchemaExamplesModule,
    // TruUiExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
