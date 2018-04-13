import { ElementRef, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import { JsonFormFieldsService } from '../../';
export declare class FieldComponent implements OnInit, OnChanges {
    jsonFormFieldsService: JsonFormFieldsService;
    el: ElementRef;
    container: ViewContainerRef;
    control: SchemaFormControl;
    index: number;
    submitted: boolean;
    patterns: any;
    constructor(jsonFormFieldsService: JsonFormFieldsService, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    generateField(): void;
    getClass(defaultClass?: string): string;
}
