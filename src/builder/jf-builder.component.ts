import {AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {JsonFormComponent} from '../json-form.component';
import {JfBuilderSamples} from './jf-builder.samples';
import {JsonFormFieldsService} from '../services/fields.service';
import { ColourPickerComponent } from './components/colour-picker/colour-picker.component';

@Component({
  selector: 'jf-builder',
  templateUrl: './jf-builder.component.html',
  styleUrls: ['./jf-builder.component.css']
})
export class JfBuilderComponent implements OnInit, AfterViewInit {
  public schema: {};
  public schemaControl: FormControl;
  public form: FormGroup;
  @ViewChild('jfForm', { read: ViewContainerRef }) jfForm;
  @ViewChild('jsonSchema') jsonSchema: ElementRef;
  @ViewChild('formResponse') formResponse: ElementRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    public jfBuilderSamples: JfBuilderSamples,
    public jsonFormFieldsService: JsonFormFieldsService
  ) {
    const ValidatorJSON = (control: AbstractControl) => {
      try {
        JSON.parse(control.value);
        return null;
      } catch (err) {
        return { invalidJSON: err.message };
      }
    };

    jsonFormFieldsService.register('colour', ColourPickerComponent);
    this.schemaControl = new FormControl('', ValidatorJSON);
    this.form = new FormGroup({ schema: this.schemaControl });
    this.schemaControl.setValue(JSON.stringify(jfBuilderSamples.json.add_vehicle, null, '\t'));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.handleChange(), 1000);
  }

  getSchemaSamples() {
    return Object.keys(this.jfBuilderSamples.json);
  }

  handleChange(value?: string) {
    if (typeof (value) !== 'undefined') {
      this.schemaControl.setValue(JSON.stringify(this.jfBuilderSamples.json[value], null, '\t'));
    }

    try {
      this.schema = JSON.parse(this.schemaControl.value);
      this.jfForm.clear();
      const componentFactory = this.resolver.resolveComponentFactory(JsonFormComponent);
      const componentRef = this.jfForm.createComponent(componentFactory);
      componentRef.instance.schema = this.schema;
      componentRef.instance.submit = 'Submit';
      componentRef.instance.handleSubmit.subscribe((data) => {
        this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
      });
    } catch {}
  }

  onTabKey(event) {
    event.preventDefault();
    const start = this.jsonSchema.nativeElement.selectionStart;
    const end = this.jsonSchema.nativeElement.selectionEnd;
    this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\t' +
      this.schemaControl.value.substring(end));
    this.jsonSchema.nativeElement.selectionStart =
      this.jsonSchema.nativeElement.selectionEnd = start + '\t'.length;
  }

  onEnterKey(event) {
    event.preventDefault();
    const start = this.jsonSchema.nativeElement.selectionStart;
    const end = this.jsonSchema.nativeElement.selectionEnd;
    const matches = [];
    const reg = /\t+/g;
    const string = this.schemaControl.value.substr(0, start);
    const reg2 = /\t+/;
    let m;
    let spaces = '';

    while ((m = reg.exec(string)) !== null) {
      matches.push(string.substring(m.index).match(reg2)[0]);
    }

    if (matches.length) {
      spaces = matches[matches.length - 1];
    }

    this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\n' + spaces +
      this.schemaControl.value.substring(end));
    this.jsonSchema.nativeElement.selectionStart =
      this.jsonSchema.nativeElement.selectionEnd = start + '\n'.length + spaces.length;
  }

  goToError(string) {
    const position = string.split(' ');
    const col = +position[position.length - 1];
    this.jsonSchema.nativeElement.selectionStart = col;
    this.jsonSchema.nativeElement.focus();
  }
}

