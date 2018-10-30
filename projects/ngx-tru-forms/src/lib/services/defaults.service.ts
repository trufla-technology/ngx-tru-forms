import { Injectable } from '@angular/core';

@Injectable()
export class JsonFormDefaultsService {
  private defaultTypes: { [type: string]: any };

  constructor() {
    this.defaultTypes = this.defaultTypes || {};
  }

  public get(prop, schema, data) {
    const defaultString = (prop.hasOwnProperty('format') && prop.format === 'multiselect') ? [] : '';
    let defaultValue = schema.properties[prop].default || defaultString;
    if (this.has(schema.properties[prop].default)) {
      defaultValue = this.eval(schema.properties[prop].default)();
    }

    // data override defaults
    if (data && data.hasOwnProperty(prop)) {
      defaultValue = data[prop];
    }

    if (prop.hasOwnProperty('format') && prop.format === 'date' && defaultValue.length > 0) {
      defaultValue = new Date(defaultValue);
    }

    return defaultValue;
  }

  private eval(str) {
    return this.defaultTypes[str];
  }

  public has(str) {
    return this.defaultTypes.hasOwnProperty(str);
  }

  public register(str: string, callback: Function) {
    this.defaultTypes[str] = callback;
  }
}
