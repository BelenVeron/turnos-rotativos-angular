import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { HorasCargadas } from 'src/app/models/horas-cargadas';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { FIELDS } from './empleado-data';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  titleForm = 'Agregar empleado'
  empleados: Empleado[] = [];
  columns: string[] = ['nombre', 'apellido', 'dni', 'delete'];
  columnsHoras: string[] = ['Tipo de jornada', 'Horas cargadas'];
  horasCargadas: HorasCargadas[] = [];
  fields = FIELDS;
  dataSearch = {
    label: 'Ingresar el dni',
    name: 'dni',
    value: ''
  }
  message = {
    addSuccess: 'El empleado ha sido guardado',
    deleteSuccess: 'El empleado ha sido eliminado',
    searchSuccess: 'Se listan las horas cargadas por tipo de jornada'
  }

  constructor(private empleadoService: EmpleadoService,
    private errorService: ErrorHandlingService
  ) {}

  ngOnInit(): void {
    this.getListEmpleados();
  }

  /* Lista los empleados */
  getListEmpleados() {
    this.empleadoService.getAll().subscribe(
      data => {
        this.empleados = data;
      },
      err => {
        this.errorService.error(err.error);
      }
    )
  }

  /* Lista las horas de los empleados */
  getListHoras(data: any) {
    this.empleadoService.getHoras(data.dni).subscribe(
      data => {
        this.horasCargadas = data;
        this.errorService.success(this.message.searchSuccess);
      },
      err => {
        this.errorService.error(err.error);
      }
    )
  }

  /* Agrega empleado */
  addEmpleado(data: any): void {
    let empleado = new Empleado (
      null,
      data.nombre,
      data.apellido,
      data.dni
    )
    this.empleadoService.add(empleado).subscribe(
      data => {
        this.getListEmpleados();
        this.errorService.success(this.message.addSuccess);
      },
      err => {
        this.errorService.error(err.error);
      }
    )
  }

  action(data: any): void {
    switch (data.type) {
      case 'delete':
          this.deleteEmpleado(data.data);
        break;
    
      default:
      break;
    }
  }

  /* Elimina empleado */
  deleteEmpleado(empleado: Empleado): void {
    if (empleado.id) {
      this.empleadoService.delete(empleado.id).subscribe(
        data => {
          this.getListEmpleados();
          this.errorService.success(this.message.deleteSuccess);
        },
        err => {
          this.errorService.error(err.error);
        }
      );
    }
  }

}
