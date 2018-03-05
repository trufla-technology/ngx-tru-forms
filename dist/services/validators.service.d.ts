import { ValidatorFn } from '@angular/forms';
export declare class JsonFormValidatorsService {
    validators: Array<any>;
    constructor();
    get(prop: any, schema: any): ValidatorFn;
    register(validator: ValidatorFn): void;
}
