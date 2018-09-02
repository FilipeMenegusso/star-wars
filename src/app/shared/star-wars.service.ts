import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPerson } from './person.model';

@Injectable()
export class StarWarsService {
    private urlBase = 'https://swapi.co/api/people?';

    constructor(private http: HttpClient) { }

    getPeople(currentPage: number, search: string): Observable<any> {
        const url = `${this.urlBase}${search ? 'search' : 'page'}=${search ? search : currentPage}`;

        return this.http.get<IPerson[]>(url)
        .pipe(catchError(this.handleError<any>('getPeople', [])))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
}