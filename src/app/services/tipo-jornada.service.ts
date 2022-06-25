import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoJornada } from '../models/tipo-jornada';

@Injectable({
  providedIn: 'root'
})
export class TipoJornadaService {

  URL = environment.environmentUrl;
  getListTipoJornada = environment.getListTipoJornada;
  addTipoJornada = environment.addTipoJornada;
  deleteTipoJornada = environment.deleteTipoJornada;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<TipoJornada[]> {
    return this.httpClient.get<TipoJornada[]>(this.URL + this.getListTipoJornada);
  }

  public add(TipoJornada: TipoJornada): Observable<TipoJornada> {
    return this.httpClient.post<TipoJornada>(this.URL + this.addTipoJornada, TipoJornada);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + this.deleteTipoJornada + id, {responseType: 'text'});
  }
}
