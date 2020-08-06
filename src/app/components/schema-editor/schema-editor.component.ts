import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { NgxEditorModel } from 'ngx-monaco-editor';
import { JsonSchemaExamplesSamples } from 'src/app/json-schema-examples/json-schema-examples.samples';

@Component({
  selector: 'app-schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.css']
})
export class SchemaEditorComponent implements OnInit, OnChanges {
  @Input('schema') schema;
  @Output() schemaHasChanged = new EventEmitter()
  options = {theme: 'vs-dark', wordWrap: 'on'};
  model: NgxEditorModel;

  constructor(
    public jsonSchemaExamplesSamples: JsonSchemaExamplesSamples
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.schema = JSON.stringify(this.schema, null, 2);
    this.model = {
      value: this.schema,
      language: 'json',
      // uri: monaco.Uri.parse('a://b/foo.json')
    };
  }

  handleSchemaChange(e) {
    this.schemaHasChanged.emit(e);
  }

}
