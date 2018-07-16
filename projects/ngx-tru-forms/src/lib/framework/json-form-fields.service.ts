import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { SchemaFormControl } from '../models/schema-form-control';
import { StringComponent } from '../fields/string/string.component';

@Injectable()
export class JsonFormFieldsService {
  name: string;
  rootViewContainer;
  public fieldTypes: { [type: string]: any } = {};
  private defaultFieldType = StringComponent;
  private viewOnly = false;
  // TODO: Create variable public viewTypes = { string: StringViewComponet, ...all other components };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(control: SchemaFormControl) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
    const componentRef = this.rootViewContainer.createComponent(componentFactory);
    componentRef.instance.control = control;
    componentRef.instance.schema = control.schema;
    componentRef.instance.style = control.style;
  }

  has(type: string) {
    return this.fieldTypes.hasOwnProperty(type);
  }

  register(type: string, field: any) {
    this.fieldTypes[type] = field;
  }

  get(control): any {
    /*
    TODO: create a new local variable for fields. If this.viewOnly is true assign fieldTypes to fields
    otherwise use viewTypes. Then the rest of the logic will work on it's own.
     */

    // check if a field is getting overridden by format
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
