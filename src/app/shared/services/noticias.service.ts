import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
//import { catchError, map, throwError } from 'rxjs';
import { Noticias} from '../models/backendModels';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<Noticias[]> {

    return this.http
      .get<Noticias[]>(`${this.baseUrl}/noticias`);
  }

  sortAllNews(): Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        _sort: 'author',
      },
    });
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }

  sortTypeFiesta() : Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        type: 'party',
      }
    })
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }

  sortTypePolicia() : Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        type: 'police',
      }
    })
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }

  sortTypeCompañia() : Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        type: 'business',
      }
    })
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }

  sortTypePolitica() : Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        type: 'politics',
      }
    })
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }
}
