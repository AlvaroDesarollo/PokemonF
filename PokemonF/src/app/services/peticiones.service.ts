import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private get(id?: number): Observable<any> {
    const url = 'http://localhost:5020/pokemon/v1/getPokemons';
    const complemento = id ? url + `/id` : url;
    let body = {};
    if (id) {
      body = {
        id
      };
    }
    return this.httpClient.post(complemento, body)
    .pipe(
      catchError( this.handleError ),
      map((data: HttpResponse<any>) => {
        return data;
    }));
  }

  getPokemons(id?: number): Observable<any> {
    return this.get(id);
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Petitions Service, an error occurred:', error.error.message);
    } else {
      console.error(`Petitions Service returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Petitions Service: Something bad happened; please try again later.');
  }
}
