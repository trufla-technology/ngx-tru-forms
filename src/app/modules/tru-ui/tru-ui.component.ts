import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DataListenerService } from 'src/app/services/data-listener.service';
import { SchemaListenerService } from 'src/app/services/schema-listener.service';
import { JsonFormComponent } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from '../../json-schema-examples/json-schema-examples.samples';
import { InputColourComponent } from '../../json-schema-examples/input-colour/input-colour.component';
@Component({
  selector: 'app-tru-ui',
  templateUrl: './tru-ui.component.html',
  styleUrls: ['./tru-ui.component.css']
})
export class TruUiComponent implements OnInit, AfterViewInit {
  language;
  schema;
  viewOnly;
  data;
  fields;
  @ViewChild('truForms') truForms: JsonFormComponent;
  constructor(
    private schemaListenerService: SchemaListenerService,
    private dataService: DataListenerService,
    private jsonSchemaSamples: JsonSchemaExamplesSamples
  ) { }

  ngOnInit() {
    this.fields = {
      'colour': InputColourComponent
    };
    this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
    this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';


    this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;
    this.schemaListenerService.schema.subscribe((d) => {
      this.schema = d;
     });
  }

  ngAfterViewInit() {
    this.truForms.setHeader('you can change header with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setHeader(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ');
    this.truForms.setFooter('you can change footer with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setFooter(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ');

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
