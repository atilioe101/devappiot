import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DispositivoItem} from "../../support/dispositivo";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable()
export class DispositivoService {
    
    constructor(private http: HttpClient) {                 
    }   

    public getAll(): Observable<DispositivoItem[]> {        
        return this.http.get<DispositivoItem[]>(environment.apiUrl + '/dispositivo')
        .pipe(catchError(this.handleError));
    } 

    public getOne(dispId: string): Observable<DispositivoItem[]> {        
      return this.http.get<DispositivoItem[]>(environment.apiUrl + '/dispositivo/dispId')
      .pipe(catchError(this.handleError));
    } 

    public upd(row: DispositivoItem): Observable<any> { 
      let data = {'_id': row._id, 'nombre': row.nombre, 'ubicacion': row.ubicacion};          
      return this.http.put(environment.apiUrl + '/dispositivo', data)      
      .pipe(catchError(this.handleError));      
    } 

    public insert(row: DispositivoItem): Observable<any> { 
      let data = {'dispositivoId': row.dispositivoId, 'nombre': row.nombre, 'ubicacion': row.ubicacion, 'sensores': row.sensores};          
      return this.http.post(environment.apiUrl + '/dispositivo', data)      
      .pipe(catchError(this.handleError));      
    } 

    public delete(row: DispositivoItem): Observable<any> {       
      return this.http.delete(environment.apiUrl + '/dispositivo/' + row._id)      
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