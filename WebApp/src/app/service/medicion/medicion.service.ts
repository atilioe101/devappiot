import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Medicion} from "../../support/medicion";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable()
export class MedicionService {
    
    constructor(private http: HttpClient) {                 
    }   

    public getAll(dispId: string): Observable<Medicion[]> {        
        return this.http.get<Medicion[]>(environment.apiUrl + '/medicion/' + dispId)
        .pipe(catchError(this.handleError));
    }     

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {          
          console.error('error:', error.error.message);
        } else {          
          console.error(
            `Backend code ${error.status}, ` + `body was: ${error.error}`);
        }       
        return throwError('Something bad happened.');
    }

}