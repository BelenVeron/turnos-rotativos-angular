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
  addEmpleado = environment.addEmpleado;
  deleteEmpleado = environment.deleteEmpleado;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.URL + this.getListEmpleado);
  }

  public add(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.URL + this.addEmpleado, empleado);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + this.deleteEmpleado + id, {responseType: 'text'});
  }

}
