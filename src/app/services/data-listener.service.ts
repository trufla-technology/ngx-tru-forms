import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataListenerService {

  private myData: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }

  set data(data) {
    this.myData.next(data);
  }

  get data() {
    return this.myData;
  }
}
