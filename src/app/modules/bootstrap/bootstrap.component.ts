import {Component, OnInit} from '@angular/core';
import {SchemaListenerService} from '../../services/schema-listener.service';
import {DataListenerService} from '../../services/data-listener.service';
import { InputColourComponent } from '../../json-schema-examples/input-colour/input-colour.component';
import { JsonSchemaExamplesSamples } from '../../json-schema-examples/json-schema-examples.samples';


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  language = 'en';
  schema;
  viewOnly;
  data;
  fields;
  constructor(
    private schemaListenerService: SchemaListenerService,
    private dataService: DataListenerService,
    private jsonSchemaSamples: JsonSchemaExamplesSamples

  ) {  
  this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
  this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';}

  ngOnInit() {
    this.fields = {
      'colour': InputColourComponent
    };
    this.schemaListenerService.schema.subscribe((d) => this.schema = d);
    this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;

  }
  toggleViewonly(e) {
    localStorage.setItem('viewOnly', e);
    this.viewOnly = e;
    window.location.reload();

  }
  handleSubmit(e) {
    this.dataService.data = e;
  }
  changeLanguage(lang) {
    localStorage.setItem('language', lang);
    this.language = lang;
  }
  toggleData(e) {
    this.data = e === 'true' ? this.jsonSchemaSamples.data : null;
  }
}
