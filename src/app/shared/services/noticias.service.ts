import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
//import { catchError, map, throwError } from 'rxjs';
import { Noticias} from '../models/backendModels';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) {
    }


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

  sortCurrentMonthNews() : Observable<Noticias[]> {
    let params = new HttpParams({
      fromObject: {
        _sort: 'date',
        order: 'desc',
      }
    })
    return this.http
    .get<Noticias[]>(`${this.baseUrl}/noticias`, {params: params});
  }
}
