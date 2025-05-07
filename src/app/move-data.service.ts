import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveDataService {

  observeObject = new Subject<object>();
  passData$ = this.observeObject.asObservable();

  passData(response: object) {
    this.observeObject.next(response);
  }
}
