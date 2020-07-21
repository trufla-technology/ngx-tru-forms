import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemaListenerService {

  private mySchema: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  get schema() {
    return this.mySchema;
  }

  set schema(schema) {
    this.mySchema.next(schema);
  }
}
