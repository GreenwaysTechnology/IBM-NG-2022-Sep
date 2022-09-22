import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs'
import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      //catchError and convert into proper response
      //catchError(err => of<User[]>([{ id: 0, name: 'test' }]))
      catchError(this.handleError<User[]>('getUsers', [{ id: 0, name: 'test' }]))
    )
  }
  //handle error Api
  private handleError<T>(operation = 'operation', result?: T) {
    //return function
    return (error: any): Observable<T> => {
      console.log(error)
      return of(result as T)
    }
  }

}
