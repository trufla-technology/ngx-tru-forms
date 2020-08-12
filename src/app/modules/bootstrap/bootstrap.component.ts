import {Component, OnInit} from '@angular/core';
import {SchemaListenerService} from '../../services/schema-listener.service';
import {DataListenerService} from '../../services/data-listener.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  schema;

  constructor(
    private schemaListenerService: SchemaListenerService,
    private dataService: DataListenerService
  ) { }

  ngOnInit() {
    this.schemaListenerService.schema.subscribe((d) => this.schema = d);
  }

  handleSubmit(e) {
    this.dataService.data = e;
  }

}
