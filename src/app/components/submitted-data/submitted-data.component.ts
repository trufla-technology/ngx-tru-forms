import { Component, OnInit } from '@angular/core';
import {DataListenerService} from '../../services/data-listener.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css']
})
export class SubmittedDataComponent implements OnInit {

  data;
  model;
  options;

  constructor(
    private dataservice: DataListenerService
  ) { }

  ngOnInit() {
    this.options = {
      readOnly: true
    }
    this.model = {
      value: this.data,
      language: 'json'
    }
    this.dataservice.data.subscribe((d) => {
      if (d) {
        this.data = JSON.stringify(d, null, 2);
        this.model = {
          value: this.data,
          language: 'json'
        }
      }
    });
  }

}
