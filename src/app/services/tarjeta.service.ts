import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from 'src/app/models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myLocalAppUrl = 'https://localhost:44373/'; //local
  myAppUrl = 'https://tarjetasbackendservice.azurewebsites.net/';
  myApiUrl = 'api/TarjetaCredito';
  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Observable<TarjetaCredito>{
    return this.http.post<TarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta);
  }
}
