import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class InfoService {
  info: any = {'info':'I am Joost Lekkerkerker'};

  constructor() { }

  getInfo(): Observable<any> {
    return of(this.info);
  }
}
