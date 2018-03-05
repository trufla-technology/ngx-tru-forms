export declare class JsonFormDefaultsService {
    private defaultTypes;
    constructor();
    get(prop: any, schema: any, data: any): any;
    private eval(str);
    has(str: any): boolean;
    register(str: string, callback: Function): void;
}
