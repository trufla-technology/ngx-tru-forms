import { ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import { JsonFormFieldsService } from '../../services/fields.service';
export declare class FieldComponent implements OnInit {
    jsonFormFieldsService: JsonFormFieldsService;
    el: ElementRef;
    container: ViewContainerRef;
    control: SchemaFormControl;
    patterns: any;
    constructor(jsonFormFieldsService: JsonFormFieldsService, el: ElementRef);
    ngOnInit(): void;
    patternHelp(pattern: any): any;
    getClass(defaultClass?: string): any;
}
