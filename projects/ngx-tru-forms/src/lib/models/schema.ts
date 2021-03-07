export interface Schema {
  // form id
  id: string;

  // parent key element
  key: string;

  // title to use when describing the element
  title?: string;

  // type of field: array, string, object, boolean, integer, number
  type: string;

  // formatting of the field: email, uri, date, date-time
  format?: string;

  // array of select values
  enum?: Array<any>;

  // array of select names
  enumNames?: Array<any>;

  // minimum input length
  maxLength?: number;

  // maximum input length
  minLength?: number;

  // maximum value
  maximum?: any;

  // minimum value
  minimum?: any;

  // properties
  properties?: Array<any>;

  // required
  required?: Array<any>;

  // show tooltip
  description?: string;

  // display or not
  visible?: boolean;

  // add masking
  mask?: Array<any>;

  // add verify input
  verify?: any;

  // add image uploader validation in MB
  maxSize?: any;

  // allowed format default allow all
  imageFormat?: Array<any>;
  maxItem?: any;
}
