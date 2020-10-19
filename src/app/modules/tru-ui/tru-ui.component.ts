import { Component, OnInit } from '@angular/core';
import { DataListenerService } from 'src/app/services/data-listener.service';
import { SchemaListenerService } from 'src/app/services/schema-listener.service';

@Component({
  selector: 'app-tru-ui',
  templateUrl: './tru-ui.component.html',
  styleUrls: ['./tru-ui.component.css']
})
export class TruUiComponent implements OnInit {
  language;
  schema;
  constructor(
    private schemaListenerService: SchemaListenerService,
    private dataService: DataListenerService
  ) { }

  ngOnInit() {
    this.schemaListenerService.schema.subscribe((d) => {
    this.language = this.language ? 'en' : null;
      this.schema = d;
     });
  }

  handleSubmit(e) {
    this.dataService.data = e;
  }
  changeLanguage(lang) {
    this.language = lang;
  }
  isArray(array) {
    return Array.isArray(array);
  }
}
