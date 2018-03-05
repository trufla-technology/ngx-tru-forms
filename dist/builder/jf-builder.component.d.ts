import { AfterViewInit, ComponentFactoryResolver, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JfBuilderSamples } from './jf-builder.samples';
import { JsonFormFieldsService } from '../services/fields.service';
export declare class JfBuilderComponent implements OnInit, AfterViewInit {
    private resolver;
    jfBuilderSamples: JfBuilderSamples;
    jsonFormFieldsService: JsonFormFieldsService;
    schema: {};
    schemaControl: FormControl;
    form: FormGroup;
    jfForm: any;
    jsonSchema: ElementRef;
    formResponse: ElementRef;
    constructor(resolver: ComponentFactoryResolver, jfBuilderSamples: JfBuilderSamples, jsonFormFieldsService: JsonFormFieldsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getSchemaSamples(): string[];
    handleChange(value?: string): void;
    onTabKey(event: any): void;
    onEnterKey(event: any): void;
    goToError(string: any): void;
}
