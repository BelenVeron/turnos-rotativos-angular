import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FIELDS } from './empleado-data';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  titleForm = 'Agregar empleado'
  empleados: Empleado[] = [];
  columns: string[] = ['nombre', 'apellido', 'dni', 'edit'];
  fields = FIELDS;

  constructor(private empleadoService: EmpleadoService) {
    
   }

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
      }
    )
  }

  /* Elimina empleado */
  deleteEmpleado(empleado: Empleado): void {
    if (empleado.id) {
      this.empleadoService.delete(empleado.id).subscribe(
        data => {
          this.getListEmpleados();
        }
      );
    }
  }

}
