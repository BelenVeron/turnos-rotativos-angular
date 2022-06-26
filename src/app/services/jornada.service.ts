import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jornada } from '../models/jornada';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  URL = environment.environmentUrl;
  getListJornada = environment.getListJornada;
  addJornada = environment.addJornada;
  deleteJornada = environment.deleteJornada;
  updateJornada = environment.updateJornada;

  constructor(private httpClient: HttpClient) { }

  public getAll(id: number): Observable<Jornada[]> {
    return this.httpClient.get<Jornada[]>(this.URL + this.getListJornada + id);
  }

  public add(id: number, Jornada: Jornada): Observable<Jornada> {
    return this.httpClient.post<Jornada>(this.URL + this.addJornada + id, Jornada);
  }

  public update(id: number, Jornada: Jornada): Observable<Jornada> {
    return this.httpClient.put<Jornada>(this.URL + this.updateJornada + id, Jornada);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + this.deleteJornada + id, {responseType: 'text'});
  }
}
