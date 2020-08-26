import { Component, OnInit, ChangeDetectorRef, ViewChild, DoCheck } from '@angular/core';
import { JsonFormComponent } from '@trufla/ngx-tru-forms';
@Component({
  selector: 'app-tru-ui-form',
  templateUrl: './tru-ui-form.component.html',
  styleUrls: ['./tru-ui-form.component.css']
})
export class TruUiFormComponent implements OnInit, DoCheck {
  language = 'en';
  @ViewChild('jfForm', {static: false}) jfForm: JsonFormComponent;
  schema = {
    "title": [
      {"language":"en", "value": "login form"},
      {"language":"fr", "value": "Formulaire de connexion"}
    ],
    "description": [  
      {"language":"en","value": "login form"},
      {"language":"fr", "value": "Formulaire de connexion"}
    ],
    "type": "object",
    "properties": {
      "first_name": {
        "type": "string",
        "title": [
          {"language": "en","value": "first_name"},
          {"language": "fr","value": "leprénom"}
        ]
      },
      "last_name": {
        "type": "string",
        "title": [
          {"language":"en","value": "last_name"},
          {"language":"fr","value": "lenom de famille"}
        ]
      }
    }
  }
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.cd.detectChanges();
  }
  handleSubmit(data) {
  console.log(data);
 }
 changeLanguage(lang) {
   this.language = lang;
   console.log(lang)
   this.cd.detectChanges();
 }
}
