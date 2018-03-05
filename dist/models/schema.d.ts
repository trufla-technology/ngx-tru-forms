export interface Schema {
    key: string;
    title: string;
    type: string;
    format: string;
    enum: Array<any>;
    enumNames: Array<any>;
    maxLength: number;
    minLength: number;
    properties: Array<any>;
    required: Array<any>;
    description: string;
    visible: boolean;
}
