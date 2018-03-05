import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { JsonFormDefaultsService } from './services/defaults.service';
export declare class JsonFormComponent implements OnInit {
    vl: JsonFormValidatorsService;
    df: JsonFormDefaultsService;
    cd: ChangeDetectorRef;
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
    constructor(fb: FormBuilder, vl: JsonFormValidatorsService, df: JsonFormDefaultsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    constructForm(): void;
    isValidSchema(): boolean;
    private generateForm(schema, group?, data?, style?);
    handleOnSubmit(): void;
    handleOnChange(key: any, value: any): void;
    handleOnCancel(): void;
}
