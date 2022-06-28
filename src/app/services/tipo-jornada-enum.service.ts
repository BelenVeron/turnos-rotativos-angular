import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoJornadaEnumService {

  
  tipoJornadas: { [key: string]: string } = {
    TURNO_EXTRA: 'Turno Extra',
    VACACIONES: 'Vacaciones',
    DIA_LIBRE: 'Dia Libre',
    TURNO_NORMAL: 'Turno Normal'
  }

  constructor() { }

  getDescription(key: string): string {
    return this.tipoJornadas[key]
  }
  
  
}
 