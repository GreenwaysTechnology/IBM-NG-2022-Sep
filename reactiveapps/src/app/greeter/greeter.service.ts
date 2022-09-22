import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreeterService {

  constructor() { }

  sayHello(): Observable<string> {
    return new Observable(observer => {
      //push data
      observer.next('Hello')
      observer.complete() //stream will be closed if there is no more data
    })
  }
  //opertors to create Observable
  sayHai(): Observable<string> {
    //create stream push data.
    return of('Hai')
  }


}
