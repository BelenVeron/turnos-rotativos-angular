import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {
    
   }

  ngOnInit(): void {
    this.getListEmpleados();
  }

  getListEmpleados() {
    this.empleadoService.getAll().subscribe(
      data => {
        this.empleados = data;
        console.log(this.empleados)
      },
      err => {

      }
    )
  }

}
