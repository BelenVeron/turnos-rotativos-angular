import { Component, OnInit } from '@angular/core';
import { Jornada } from 'src/app/models/jornada';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { JornadaService } from 'src/app/services/jornada.service';
import { FIELDS } from './jornada-data';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  jornadas: Jornada[] = [];
  columns: string[] = ['tipoJornada', 'fecha', 'horaEntrada', 'horaSalida', 'edit'];
  title = 'Agregar jornada';
  fields = FIELDS;
  dataSearch = {
    label: 'Ingresar el dni',
    name: 'dni',
    value: ''
  }
  message = {
    addSuccess: 'El Tipo de jornada ha sido guardado',
    deleteSuccess: 'El Tipo de jornada ha sido eliminado'
  }
  dni: number | null = null;

  constructor(
    private jornadaService: JornadaService,
    private errorService: ErrorHandlingService,
    private dialog: MatDialog
    ) {
    
   }

  ngOnInit(): void {
  }

  getList(data: any): void {
    this.dni = data.dni;
    this.getListJornadas();
  }

  /* Lista las jornadas */
  getListJornadas() {
    if (this.dni) {
      this.jornadaService.getAll(this.dni).subscribe(
        data => {
          this.jornadas = data;
          console.log(data)
        },
        err => {
          this.errorService.error(err.error);
        }
      )
    }
  }

  action(data: any): void {
    switch (data.type) {
      case 'delete':
          this.deleteJornada(data.data);
      break;
      case 'edit':
          this.openDialog(data.data);
      break;
    
      default:
      break;
    }
  }

  /* Edita Jornada */
  editJornada(data: any): void {
    //console.log(data)
  }

  openDialog(data: any): void {
    //console.log(data)
    this.fields.map(field => {
      if (field.model !== undefined) {
        field.model = data[field.name]
        //console.log(field.model)
      }
    })
    this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        fields: this.fields,
        values: data,
        title: 'Editar Jornada'
      }
    });
  }

  /* Crea la jornada */
  createJornada(data: any): Jornada {
    let jornada = new Jornada (
      null,
      data.tipoJornada,
      moment(data).format('MM-DD-YYYY'),
      data.horaEntrada + ':00',
      data.horaSalida + ':00'
    );
    return jornada;
  }

  /* Agrega jornada */
  addJornada(data: any): void {
    this.dni = data.dni;
    if (this.dni) {
      this.jornadaService.add(this.dni, this.createJornada(data)).subscribe(
        data => {
          if (this.dni) {
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
          if (this.dni) {
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
