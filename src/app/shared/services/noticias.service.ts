import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Noticias } from '../models/backendModels';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) {}

  getCurrentMonthNews(): Observable<Noticias[]>{
    let params = new HttpParams({
      fromObject: { _sort: 'date', _order: 'desc', _limit: '4'}, //BUSCAR PARA QUE EL SORT SE HAGA SOLO DEL CURRENT MONTH
    });

    return this.http
      .get<Noticias[]>(`${this.baseUrl}/noticias`, { params: params })
      .pipe(
        map((noticias) => noticias),
        catchError((err) => throwError(err))
      );
  }

  getAllNews(): Observable<Noticias[]> {
    let params = new HttpParams({
    });

    return this.http
      .get<Noticias[]>(`${this.baseUrl}/noticias`, { params: params })
      .pipe(
        map((noticias) => noticias),
        catchError((err) => throwError(err))
      ); 
  }
}
