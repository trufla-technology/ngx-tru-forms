import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DataListenerService } from 'src/app/services/data-listener.service';
import { SchemaListenerService } from 'src/app/services/schema-listener.service';
import { JsonFormComponent } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from '../../json-schema-examples/json-schema-examples.samples';

@Component({
  selector: 'app-tru-ui',
  templateUrl: './tru-ui.component.html',
  styleUrls: ['./tru-ui.component.css']
})
export class TruUiComponent implements OnInit {
  language;
  schema;
  viewOnly;
  data;
  @ViewChild('truForms', {static: false}) truForms: JsonFormComponent;
  constructor(
    private schemaListenerService: SchemaListenerService,
    private dataService: DataListenerService,
    private jsonSchemaSamples: JsonSchemaExamplesSamples
  ) { }

  ngOnInit() {
    this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
    this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
    this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;
    this.schemaListenerService.schema.subscribe((d) => {
      this.schema = d;
     });
  }

  handleSubmit(e) {
    this.dataService.data = e;
  }

  handleCancel(e) {
   this.truForms.data = {};
   this.truForms.constructForm();
  }

  changeLanguage(lang) {
    localStorage.setItem('language', lang);
    this.language = lang;
  }

  isArray(array) {
    return Array.isArray(array);
  }

  toggleViewonly(e) {
    localStorage.setItem('viewOnly', e);
    window.location.href = '/';
  }

  toggleData(e) {
    this.data = e === 'true' ? this.jsonSchemaSamples.data : null;
  }
}
