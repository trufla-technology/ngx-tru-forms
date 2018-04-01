import { DoCheck, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { JsonFormDefaultsService } from './services/defaults.service';
export declare class JsonFormComponent implements OnInit, DoCheck {
    vl: JsonFormValidatorsService;
    df: JsonFormDefaultsService;
    schema: any;
    data: any;
    style: any;
    submit: string;
    cancel: string;
    handleSubmit: EventEmitter<{}>;
    handleChange: EventEmitter<{}>;
    handleCancel: EventEmitter<{}>;
    form: any;
    model: any;
    fb: any;
    control: {
        key: string;
        value: string;
    };
    oldSchema: string;
    oldData: string;
    changeDetected: boolean;
    constructor(fb: FormBuilder, vl: JsonFormValidatorsService, df: JsonFormDefaultsService);
    ngOnInit(): void;
    ngDoCheck(): void;
    constructForm(): void;
    isValidSchema(): boolean;
    private generateForm(schema, group?, data?, style?, path?);
    isVisible(prop: any): boolean;
    isFormat(prop: any, format: any): boolean;
    handleOnSubmit(): void;
    handleOnChange(key: any, value: any): void;
    handleOnCancel(): void;
}
