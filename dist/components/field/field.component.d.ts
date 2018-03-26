import { ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import { JsonFormFieldsService } from '../../';
export declare class FieldComponent implements OnInit {
    jsonFormFieldsService: JsonFormFieldsService;
    el: ElementRef;
    container: ViewContainerRef;
    control: SchemaFormControl;
    index: number;
    patterns: any;
    constructor(jsonFormFieldsService: JsonFormFieldsService, el: ElementRef);
    ngOnInit(): void;
    getClass(defaultClass?: string): string;
}
