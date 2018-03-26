import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { StringComponent } from '../fields/string/string.component';
import { SchemaFormControl } from '../models/schema-form-control';
import { SelectComponent } from '../fields/select/select.component';
import { NumberComponent } from '../fields/number/number.component';
import { BooleanComponent } from '../fields/boolean/boolean.component';
import { PhotoComponent } from '../fields/photo/photo.component';
import { TextareaComponent } from '../fields/textarea/textarea.component';
import { ObjectComponent } from '../fields/object/object.component';
import { ArrayComponent } from '../fields/array/array.component';
import { RadiogroupComponent } from "../fields/radiogroup/radiogroup.component";
import { CheckboxgroupComponent } from "../fields/checkboxgroup/checkboxgroup.component";

@Injectable()
export class JsonFormFieldsService {
  public rootViewContainer;
  private fieldTypes: { [type: string]: any };
  private defaultFieldType = StringComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
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

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(control: SchemaFormControl, index: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
    const componentRef = this.rootViewContainer.createComponent(componentFactory);
    componentRef.instance.control = control;
    componentRef.instance.schema = control.schema;
    componentRef.instance.style = control.style;
    componentRef.instance.index = index;
  }

  has(type: string) {
    return this.fieldTypes.hasOwnProperty(type);
  }

  register(type: string, field: any) {
    this.fieldTypes[type] = field;
  }

  get(control): any {
    // check if a field is getting overriden by format
    if (typeof(control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
      return this.fieldTypes[control.schema.format];
    }

    if (typeof(control.schema.enum) !== 'undefined' && control.schema.type === 'array') {
      return this.fieldTypes['checkboxgroup'];
    } else if (typeof(control.schema.enum) !== 'undefined') {
      return this.fieldTypes['select'];
    } else if (this.has(control.schema.format)) {
      return this.fieldTypes[control.schema.format];
    } else if (this.has(control.schema.type)) {
      return this.fieldTypes[control.schema.type];
    }
    return this.defaultFieldType;
  }
}
