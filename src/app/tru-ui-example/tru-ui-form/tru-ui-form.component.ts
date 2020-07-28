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
        "type": "string",
        "format": "email"
      },
      "message": {
        "type": "textarea"
      },
      "idPhoto": {
        "type": "string",
        "format": "photo"
      },
      "billing_address": {
        "type": "boolean"
      },
		"dob": {
			"type": "string",
			"format": "date"
    },
    "checkBoxGroup": {
      "type": "array",
      "enum": [
        "cell",
        "home",
        "work"
      ]
    }, 
    "radioButtonGroup": {
      "type": "string",
      "format":"radiogroup",
      "enum": [
        "cell",
        "home",
        "work"
      ]
    },
    "multi_check_box": {
      "type": "string",
      "format": "autocomplete",
			"enum": [
				"one",
				"two",
				"three"
      ]
     },
		"phone_numbers": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"number": {
						"type": "number"
          },
          "type": {
						"type": "radiogroup",
						"enum": [
							"cell",
							"home",
							"work"
						],
						"enumNames": [
							"Cell",
							"Home",
							"Work"
						]
					},
				}
			}
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
