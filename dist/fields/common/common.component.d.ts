import { Schema } from '../../models/schema';
import { SchemaFormControl } from '../../models/schema-form-control';
export declare class CommonComponent {
    control: SchemaFormControl;
    schema: Schema;
    style: {};
    index: number;
    isRequired(): boolean;
    title(): string;
    strToUpperCase(str: string): string;
    placeholder(): string;
    type(): string;
    id(i?: any): string;
    getClass(defaultClass?: any): any;
    getMask(): false | (string | RegExp)[];
}
