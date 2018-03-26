import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonFormValidatorsService } from './services/validators.service';
import { JsonFormDefaultsService } from './services/defaults.service';
export declare class JsonFormComponent implements OnInit, OnChanges {
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
    constructor(fb: FormBuilder, vl: JsonFormValidatorsService, df: JsonFormDefaultsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    constructForm(): void;
    isValidSchema(): boolean;
    private generateForm(schema, group?, data?, style?, path?);
    isVisible(prop: any): boolean;
    handleOnSubmit(): void;
    handleOnChange(key: any, value: any): void;
    handleOnCancel(): void;
}
