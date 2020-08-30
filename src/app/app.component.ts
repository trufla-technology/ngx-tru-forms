import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { JsonSchemaExamplesSamples } from './json-schema-examples/json-schema-examples.samples';
import * as _ from 'lodash';
import {SchemaListenerService} from './services/schema-listener.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  allSchemaTitles: string[];
  selectedSchemaTitle = 'simple_input';
  schema;
  generateFormSchema;
  framework;

  constructor(
    private jsonSchemaSamples: JsonSchemaExamplesSamples,
    private schemaListenerService: SchemaListenerService
  ) {}

  ngOnInit() {
    this.allSchemaTitles = this.getSchemasTitles();
    this.getSchema(this.selectedSchemaTitle);
    // this.framework = localStorage.getItem('framework') || 'material';
    this.schemaListenerService.schema = this.generateFormSchema;
  }

  getSchemasTitles() {
    return _.keys(this.jsonSchemaSamples.json);
  }

  handleSelectedSchemaChanged(e) {
    this.selectedSchemaTitle = e;
    this.getSchema(this.selectedSchemaTitle);
  }

  getSchema(title) {
    this.schema = this.jsonSchemaSamples.json[title];
    this.generateFormSchema = this.schema;
  }

  handleSchemaHasChanged(e) {
    try {
      this.generateFormSchema = JSON.parse(e);
    } catch (e) {
      console.log(e.message);
    }
    this.schemaListenerService.schema = this.generateFormSchema;
  }

  format(json) {
    return JSON.stringify(json, null, 2);
  }

  handleFrameWorkChanged(e) {
    this.framework = e;
    // localStorage.setItem('framework', this.framework);
  }
}
