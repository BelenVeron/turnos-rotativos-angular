import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL = environment.environmentUrl;
  getListEmpleado = environment.getListEmpleado;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.URL + this.getListEmpleado);
  }

  public addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.URL + this.getListEmpleado, empleado);
  }

}
