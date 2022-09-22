import { Injectable } from '@angular/core';
import { Observable, of, map, take, distinct, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }

  public doubleIt(): Observable<number> {
    return of(1, 2, 2, 4, 3, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      //use data processing operators
      map(i => i * 2),
      take(5),
      distinct(),
      filter(i => i > 5)
    )
  }

}
