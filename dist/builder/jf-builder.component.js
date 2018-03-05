import { Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JsonFormComponent } from '../json-form.component';
import { JfBuilderSamples } from './jf-builder.samples';
import { JsonFormFieldsService } from '../services/fields.service';
import { ColourPickerComponent } from './components/colour-picker/colour-picker.component';
var JfBuilderComponent = /** @class */ (function () {
    function JfBuilderComponent(resolver, jfBuilderSamples, jsonFormFieldsService) {
        this.resolver = resolver;
        this.jfBuilderSamples = jfBuilderSamples;
        this.jsonFormFieldsService = jsonFormFieldsService;
        var ValidatorJSON = function (control) {
            try {
                JSON.parse(control.value);
                return null;
            }
            catch (err) {
                return { invalidJSON: err.message };
            }
        };
        jsonFormFieldsService.register('colour', ColourPickerComponent);
        this.schemaControl = new FormControl('', ValidatorJSON);
        this.form = new FormGroup({ schema: this.schemaControl });
        this.schemaControl.setValue(JSON.stringify(jfBuilderSamples.json.add_vehicle, null, '\t'));
    }
    JfBuilderComponent.prototype.ngOnInit = function () {
    };
    JfBuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.handleChange(); }, 1000);
    };
    JfBuilderComponent.prototype.getSchemaSamples = function () {
        return Object.keys(this.jfBuilderSamples.json);
    };
    JfBuilderComponent.prototype.handleChange = function (value) {
        var _this = this;
        if (typeof (value) !== 'undefined') {
            this.schemaControl.setValue(JSON.stringify(this.jfBuilderSamples.json[value], null, '\t'));
        }
        try {
            this.schema = JSON.parse(this.schemaControl.value);
            this.jfForm.clear();
            var componentFactory = this.resolver.resolveComponentFactory(JsonFormComponent);
            var componentRef = this.jfForm.createComponent(componentFactory);
            componentRef.instance.schema = this.schema;
            componentRef.instance.submit = 'Submit';
            componentRef.instance.handleSubmit.subscribe(function (data) {
                _this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
            });
        }
        catch (_a) { }
    };
    JfBuilderComponent.prototype.onTabKey = function (event) {
        event.preventDefault();
        var start = this.jsonSchema.nativeElement.selectionStart;
        var end = this.jsonSchema.nativeElement.selectionEnd;
        this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\t' +
            this.schemaControl.value.substring(end));
        this.jsonSchema.nativeElement.selectionStart =
            this.jsonSchema.nativeElement.selectionEnd = start + '\t'.length;
    };
    JfBuilderComponent.prototype.onEnterKey = function (event) {
        event.preventDefault();
        var start = this.jsonSchema.nativeElement.selectionStart;
        var end = this.jsonSchema.nativeElement.selectionEnd;
        var matches = [];
        var reg = /\t+/g;
        var string = this.schemaControl.value.substr(0, start);
        var reg2 = /\t+/;
        var m;
        var spaces = '';
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
    };
    JfBuilderComponent.prototype.goToError = function (string) {
        var position = string.split(' ');
        var col = +position[position.length - 1];
        this.jsonSchema.nativeElement.selectionStart = col;
        this.jsonSchema.nativeElement.focus();
    };
    JfBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-builder',
                    templateUrl: './jf-builder.component.html',
                    styleUrls: ['./jf-builder.component.css']
                },] },
    ];
    /** @nocollapse */
    JfBuilderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: JfBuilderSamples, },
        { type: JsonFormFieldsService, },
    ]; };
    JfBuilderComponent.propDecorators = {
        "jfForm": [{ type: ViewChild, args: ['jfForm', { read: ViewContainerRef },] },],
        "jsonSchema": [{ type: ViewChild, args: ['jsonSchema',] },],
        "formResponse": [{ type: ViewChild, args: ['formResponse',] },],
    };
    return JfBuilderComponent;
}());
export { JfBuilderComponent };
