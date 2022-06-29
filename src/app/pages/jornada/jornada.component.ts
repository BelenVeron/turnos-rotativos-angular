import { Component, OnInit } from '@angular/core';
import { Jornada } from 'src/app/models/jornada';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { JornadaService } from 'src/app/services/jornada.service';
import { FIELDS_ADD, FIELDS_UPDATE } from './jornada-data';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import * as moment from 'moment';
import { TipoJornadaService } from 'src/app/services/tipo-jornada.service';
import { TipoJornada } from 'src/app/models/tipo-jornada';
import { TipoJornadaEnumService } from 'src/app/services/tipo-jornada-enum.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit {

  jornadas: Jornada[] = [];
  columns: string[] = ['tipoJornada', 'fecha', 'horaEntrada', 'horaSalida', 'edit'];
  title = 'Agregar jornada';
  fieldsAdd = FIELDS_ADD;
  fieldsUpdate = FIELDS_UPDATE;
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
  tipoJornadas: TipoJornada[] = [];

  constructor(
    private jornadaService: JornadaService,
    private tipoJornadaService: TipoJornadaService,
    private errorService: ErrorHandlingService,
    private tipoJornadaEnum: TipoJornadaEnumService,
    private dialog: MatDialog,
    ) {
    
      this.getTipoJornadasSelect();
   }

   getTipoJornadasSelect(): void {
    this.tipoJornadaService.getAll().subscribe(
      data => {
        if (data) {
          for (let index = 0; index < data.length; index++) {
            let tipoJornada = this.tipoJornadaEnum.getDescription(data[index].tipo)
            if (tipoJornada !== undefined) {
              this.fieldsAdd[1].options?.push(tipoJornada);
              this.fieldsUpdate[2].options?.push(tipoJornada);
            }
          } 
        }
      },
      err => {
        this.errorService.error(err.error);
      }
    )
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
  }

  /* Abre el modal con los valores de la jornada
     para modificar
  */
  openDialog(data: any): void {
    // mapea los valores da cada campo
    this.fieldsUpdate.map(field => {
      if (field.model !== undefined) {
        field.model = data[field.name]
      }
    })
    this.fieldsUpdate[0].id = data.id;
    // abre el modal y envia los datos y configuracion
    var ref = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        fields: this.fieldsUpdate,
        values: data,
        title: 'Editar Jornada'
      }
    });
    // recibe los datos al ejecutarse el evento
    ref.componentInstance.sendData.subscribe(
      (data) => {
        this.editJornada(data);
        ref.close();
      }
    );
  }

  /* Crea la jornada */
  createJornada(data: any): Jornada {
    let jornada = new Jornada (
      data.id || null,
      data.tipoJornada,
      moment(data).format('DD-MM-YYYY'),
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
