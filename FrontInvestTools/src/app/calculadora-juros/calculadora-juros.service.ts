import { Injectable } from '@angular/core';
import { calcularResponse } from '../Interfaces/calcular-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class calculadoraJurosService {

  constructor(private http: HttpClient){}

  postCalcular(request: any): Observable<calcularResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<calcularResponse>(`${environment.ApiUrl}/v1/Investimento`, request, httpOptions);

  }

}