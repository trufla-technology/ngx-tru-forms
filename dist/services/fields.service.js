import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { StringComponent } from '../fields/string/string.component';
import { SelectComponent } from '../fields/select/select.component';
import { NumberComponent } from '../fields/number/number.component';
import { BooleanComponent } from '../fields/boolean/boolean.component';
import { PhotoComponent } from '../fields/photo/photo.component';
import { TextareaComponent } from '../fields/textarea/textarea.component';
import { ObjectComponent } from '../fields/object/object.component';
import { ArrayComponent } from '../fields/array/array.component';
import { RadiogroupComponent } from "../fields/radiogroup/radiogroup.component";
import { CheckboxgroupComponent } from "../fields/checkboxgroup/checkboxgroup.component";
var JsonFormFieldsService = /** @class */ (function () {
    function JsonFormFieldsService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.defaultFieldType = StringComponent;
        this.fieldTypes = {};
        this.register('string', StringComponent);
        this.register('select', SelectComponent);
        this.register('number', NumberComponent);
        this.register('boolean', BooleanComponent);
        this.register('photo', PhotoComponent);
        this.register('textarea', TextareaComponent);
        this.register('object', ObjectComponent);
        this.register('array', ArrayComponent);
        this.register('radiogroup', RadiogroupComponent);
        this.register('checkboxgroup', CheckboxgroupComponent);
    }
    JsonFormFieldsService.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    JsonFormFieldsService.prototype.addDynamicComponent = function (control) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
        var componentRef = this.rootViewContainer.createComponent(componentFactory);
        componentRef.instance.control = control;
        componentRef.instance.schema = control.schema;
        componentRef.instance.style = control.style;
    };
    JsonFormFieldsService.prototype.has = function (type) {
        return this.fieldTypes.hasOwnProperty(type);
    };
    JsonFormFieldsService.prototype.register = function (type, field) {
        this.fieldTypes[type] = field;
    };
    JsonFormFieldsService.prototype.get = function (control) {
        // check if a field is getting overriden by format
        if (typeof (control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
            return this.fieldTypes[control.schema.format];
        }
        if (typeof (control.schema.enum) !== 'undefined') {
            return this.fieldTypes['select'];
        }
        else if (this.has(control.schema.format)) {
            return this.fieldTypes[control.schema.format];
        }
        else if (this.has(control.schema.type)) {
            return this.fieldTypes[control.schema.type];
        }
        return this.defaultFieldType;
    };
    JsonFormFieldsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JsonFormFieldsService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
    ]; };
    return JsonFormFieldsService;
}());
export { JsonFormFieldsService };
