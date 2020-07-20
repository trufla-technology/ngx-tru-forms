import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tru-ui-form',
  templateUrl: './tru-ui-form.component.html',
  styleUrls: ['./tru-ui-form.component.css']
})
export class TruUiFormComponent implements OnInit {
  schema = {
    "title": "Simple",
    "description": "Simple form with input fields",
    "type": "object",
    "properties": {
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "idPhoto": {
        "type": "string",
        "format": "photo"
      }
    },
    "required": ["idPhoto"]
  };
  constructor() { }

  ngOnInit() {
  }
  handleSubmit(data) {
console.log(data)  }
}
