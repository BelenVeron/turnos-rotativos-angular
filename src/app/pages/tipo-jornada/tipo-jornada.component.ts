import { Component, OnInit } from '@angular/core';
import { TipoJornada } from 'src/app/models/tipo-jornada';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { TipoJornadaService } from 'src/app/services/tipo-jornada.service';
import { FIELDS } from './tipo-jornada-data';

@Component({
  selector: 'app-tipo-jornada',
  templateUrl: './tipo-jornada.component.html',
  styleUrls: ['./tipo-jornada.component.css']
})
export class TipoJornadaComponent implements OnInit {

  tipoJornadas: TipoJornada[] = [];
  columns: string[] = ['tipo', 'edit'];
  title = 'Agregar Tipo de jornada';
  fields = FIELDS;
  message = {
    addSuccess: 'El Tipo de jornada ha sido guardado',
    deleteSuccess: 'El Tipo de jornada ha sido eliminado'
  }

  constructor(
    private tipoJornadaService: TipoJornadaService,
    private errorService: ErrorHandlingService
    ) {
    
   }

  ngOnInit(): void {
    this.getListTipoJornadas();
  }

  /* Lista los tipoJornadas */
  getListTipoJornadas() {
    this.tipoJornadaService.getAll().subscribe(
      data => {
        this.tipoJornadas = data;
      },
      err => {
        this.errorService.error(err.error);
      }
    )
  }

  /* Agrega tipoJornada */
  addTipoJornada(data: any): void {
    let tipoJornada = new TipoJornada (
      null,
      data.tipo,
    )
    this.tipoJornadaService.add(tipoJornada).subscribe(
      data => {
        this.getListTipoJornadas();
        this.errorService.success(this.message.addSuccess);
      },
      err => {
        this.errorService.error(err.error);
      }
    )
  }

  /* Elimina tipoJornada */
  deleteTipoJornada(tipoJornada: TipoJornada): void {
    if (tipoJornada.id) {
      this.tipoJornadaService.delete(tipoJornada.id).subscribe(
        data => {
          this.getListTipoJornadas();
          this.errorService.success(this.message.deleteSuccess);
        },
        err => {
          this.errorService.error(err.error);
        }
      );
    }
  }

}
