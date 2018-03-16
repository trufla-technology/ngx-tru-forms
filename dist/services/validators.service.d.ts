import { ValidatorFn } from '@angular/forms';
export declare class JsonFormValidatorsService {
    validators: Array<any>;
    constructor();
    get(prop: any, schema: any, path: any): ValidatorFn;
    register(field: any, validator: ValidatorFn): void;
    has(str: any): boolean;
}
