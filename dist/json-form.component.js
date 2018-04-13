import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { SchemaFormControl } from './models/schema-form-control';
import { JsonFormDefaultsService } from './services/defaults.service';
import { SchemaFormGroup } from './models/schema-form-group';
import { SchemaFormArray } from './models/schema-form-array';
var JsonFormComponent = /** @class */ (function () {
    function JsonFormComponent(fb, vl, df) {
        this.vl = vl;
        this.df = df;
        this.handleSubmit = new EventEmitter();
        this.handleChange = new EventEmitter();
        this.handleCancel = new EventEmitter();
        this.control = { key: '', value: '' };
        this.changeDetected = false;
        this.submitted = false;
        this.fb = fb;
    }
    JsonFormComponent.prototype.ngOnInit = function () {
        this.isWorking = false;
        this.constructForm();
    };
    JsonFormComponent.prototype.ngDoCheck = function () {
        this.changeDetected = false;
        if (this.oldSchema !== JSON.stringify(this.schema)) {
            this.oldSchema = JSON.stringify(this.schema);
            this.changeDetected = true;
        }
        if (this.oldData !== JSON.stringify(this.data)) {
            this.oldData = JSON.stringify(this.data);
            this.changeDetected = true;
        }
        if (this.changeDetected) {
            this.submitted = false;
            this.constructForm();
        }
    };
    JsonFormComponent.prototype.constructForm = function () {
        var _this = this;
        this.model = {};
        if (this.isValidSchema()) {
            this.model = this.generateForm(this.schema, {}, this.data, this.style);
            this.form = this.fb.group(this.model);
            this.form.valueChanges.subscribe(function (data) {
                _this.handleChange.emit({ control: _this.control, data: data });
            });
        }
    };
    JsonFormComponent.prototype.isValidSchema = function () {
        return typeof (this.schema) === 'object' && Object.keys(this.schema).length > 0;
    };
    JsonFormComponent.prototype.generateForm = function (schema, group, data, style, path) {
        var _this = this;
        if (!this.isVisible(schema)) {
            return group;
        }
        if (!path) {
            path = [];
        }
        Object.keys(schema.properties).forEach(function (prop) {
            if (schema.properties[prop].type === 'object') {
                var groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
                var groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                group[prop] = new SchemaFormGroup(_this.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
                group[prop].schema = schema.properties[prop];
                group[prop].style = groupStyle;
            }
            else if (schema.properties[prop].type === 'array' && !_this.isFormat(schema.properties[prop], 'multiselect')) {
                path.push(prop);
                var arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
                var arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                var fbArray = [];
                if (schema.properties[prop].enum) {
                    fbArray = schema.properties[prop].enum.map(function (e) {
                        var control = new SchemaFormControl();
                        control.schema = Object.assign({}, schema.properties[prop]);
                        control.schema.key = prop;
                        control.valueChanges.subscribe(function (event) { return _this.handleOnChange(prop, event); });
                        return control;
                    });
                }
                else {
                    fbArray = arrayData.map(function (dataAtIndex) {
                        var g = new SchemaFormGroup(_this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
                        g.schema = schema.properties[prop];
                        return g;
                    });
                }
                group[prop] = new SchemaFormArray(fbArray);
                group[prop].schema = schema.properties[prop];
                group[prop].schema.key = prop;
                group[prop].style = arrayStyle;
            }
            else if (_this.isVisible(schema.properties[prop])) {
                var control = new SchemaFormControl(_this.df.get(prop, schema, data), _this.vl.get(prop, schema, path));
                control.schema = Object.assign({}, schema.properties[prop]);
                control.schema.key = prop;
                control.style = (style && style.hasOwnProperty(prop)) ? style[prop] : {};
                control.valueChanges.subscribe(function (event) { return _this.handleOnChange(prop, event); });
                group[prop] = control;
            }
        });
        return group;
    };
    JsonFormComponent.prototype.isVisible = function (prop) {
        return prop.hasOwnProperty('visible') === false || (prop.hasOwnProperty('visible') && prop.visible === true);
    };
    JsonFormComponent.prototype.isFormat = function (prop, format) {
        return prop.hasOwnProperty('format') && prop.format === format;
    };
    JsonFormComponent.prototype.handleOnSubmit = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.handleSubmit.emit(this.form.value);
        }
    };
    JsonFormComponent.prototype.handleOnChange = function (key, value) {
        this.control = { key: key, value: value };
    };
    JsonFormComponent.prototype.handleOnCancel = function () {
        this.handleCancel.emit(this.form.value);
    };
    JsonFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-form',
                    template: "\n    <form\n      [formGroup]=\"form\"\n      (ngSubmit)=\"handleOnSubmit()\"\n      *ngIf=\"isValidSchema()\"\n    >\n      <div jf-component-chooser\n           [class]=\"outerClass\"\n           [form]=\"form\"\n           [submitted]=\"submitted\"\n           [schema]=\"schema\">\n      </div>\n      <div #ref>\n        <ng-content></ng-content>\n      </div>\n      <div\n        *ngIf=\"ref.children.length == 0\"\n        [ngClass]=\"{\n             'margin-top--double': true,\n             'page-actions--edges': (cancel && submit),\n             'page-actions--center': (!cancel || !submit)\n           }\">\n        <button\n          type=\"button\"\n          [ngClass]=\"['btn btn-default button', cancelClass]\"\n          *ngIf=\"cancel\"\n          [disabled]=\"isWorking\"\n          (click)=\"handleOnCancel()\">{{cancel}}</button>\n        <button\n          type=\"submit\"\n          [ngClass]=\"['btn btn-primary button button--accept', submitClass]\"\n          *ngIf=\"submit\"\n          [disabled]=\"isWorking\"\n        >\n            <svg *ngIf=\"isWorking\" width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#fff\">\n              <g fill=\"none\" fill-rule=\"evenodd\">\n                <g transform=\"translate(1 1)\" stroke-width=\"2\">\n                  <circle stroke-opacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\"/>\n                  <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n                    <animateTransform\n                      attributeName=\"transform\"\n                      type=\"rotate\"\n                      from=\"0 18 18\"\n                      to=\"360 18 18\"\n                      dur=\"1s\"\n                      repeatCount=\"indefinite\"/>\n                  </path>\n                </g>\n              </g>\n            </svg>\n            {{submit}}\n        </button>\n      </div>\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    JsonFormComponent.ctorParameters = function () { return [
        { type: FormBuilder, decorators: [{ type: Inject, args: [FormBuilder,] },] },
        { type: JsonFormValidatorsService, },
        { type: JsonFormDefaultsService, },
    ]; };
    JsonFormComponent.propDecorators = {
        "schema": [{ type: Input },],
        "data": [{ type: Input },],
        "style": [{ type: Input },],
        "submit": [{ type: Input },],
        "cancel": [{ type: Input },],
        "outerClass": [{ type: Input },],
        "submitClass": [{ type: Input },],
        "cancelClass": [{ type: Input },],
        "isWorking": [{ type: Input },],
        "handleSubmit": [{ type: Output },],
        "handleChange": [{ type: Output },],
        "handleCancel": [{ type: Output },],
    };
    return JsonFormComponent;
}());
export { JsonFormComponent };
