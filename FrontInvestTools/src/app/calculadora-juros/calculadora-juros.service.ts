import { Injectable } from '@angular/core';
import { CalcularResponse } from '../Interfaces/calcular-response.interface';
import { Observable  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CalcularRequest } from '../Interfaces/calcular-request.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraJurosService {

  constructor(private http: HttpClient){}

  postCalcular(request: any): Observable<CalcularResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<CalcularResponse>(`${environment.ApiUrl}/v1/Investimento`, request, httpOptions);

  }

}