import { ComponentFactoryResolver } from '@angular/core';
import { SchemaFormControl } from '../models/schema-form-control';
export declare class JsonFormFieldsService {
    private componentFactoryResolver;
    rootViewContainer: any;
    private fieldTypes;
    private defaultFieldType;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    setRootViewContainerRef(viewContainerRef: any): void;
    addDynamicComponent(control: SchemaFormControl): void;
    has(type: string): boolean;
    register(type: string, field: any): void;
    get(control: any): any;
}
