import { Injectable } from '@angular/core';
import { IFeteMusique } from './fete-musique';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class CritereService {

  constructor(protected http: HttpClient) { }

 /* fetchFields(startIndex: number, limit: number): Observable<Fields[]> {

    // base URL should not have ? in it at the en
    return this.http.get<IFeteMusique >('./assets/fete-de-la-musique-2019.json').pipe(
       map(res => res.results || []),
       catchError(error => throwError(error.message || error))
    );
  }*/

  getItems(): Observable<IFeteMusique[]> {
    return this.http.get<IFeteMusique[]>('./assets/fete-de-la-musique-2019.json');
  }

}