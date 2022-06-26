import { Component, OnInit } from '@angular/core';
import { Jornada } from 'src/app/models/jornada';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { JornadaService } from 'src/app/services/jornada.service';
import { FIELDS } from './jornada-data';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  jornadas: Jornada[] = [];
  columns: string[] = ['tipo', 'fecha', 'hora entrada', 'hora salida', 'edit'];
  title = 'Agregar jornada';
  fields = FIELDS;
  message = {
    addSuccess: 'El Tipo de jornada ha sido guardado',
    deleteSuccess: 'El Tipo de jornada ha sido eliminado'
  }
  id: number | null = null;

  constructor(
    private jornadaService: JornadaService,
    private errorService: ErrorHandlingService
    ) {
    
   }

  ngOnInit(): void {
  }

  /* Lista los jornadas */
  getListJornadas() {
    if (this.id) {
      this.jornadaService.getAll(this.id).subscribe(
        data => {
          this.jornadas = data;
        },
        err => {
          this.errorService.error(err.error);
        }
      )
    }
  }

  /* Agrega jornada */
  addJornada(data: any): void {
    console.log(data)
    this.id = data.id;
    let jornada = new Jornada (
      null,
      data.tipo,
      data.fecha,
      data.horaEntrada,
      data.horaSalida
    )
    if (this.id) {
      this.jornadaService.add(this.id, jornada).subscribe(
        data => {
          if (this.id) {
            this.getListJornadas();
          }
          this.errorService.success(this.message.addSuccess);
        },
        err => {
          this.errorService.error(err.error);
        }
      )
    }
  }

  /* Elimina jornada */
  deleteJornada(jornada: Jornada): void {
    if (jornada.id) {
      this.jornadaService.delete(jornada.id).subscribe(
        data => {
          if (this.id) {
            this.getListJornadas();
          }
          this.errorService.success(this.message.deleteSuccess);
        },
        err => {
          this.errorService.error(err.error);
        }
      );
    }
  }

}
