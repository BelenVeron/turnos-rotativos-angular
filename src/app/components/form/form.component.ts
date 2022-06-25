import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  empleadoForm = this.formBuilder.group({
    nombre:[''],
    apellido:[''],
    dni:['']
  })
  
  constructor(
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(): void {
    
  }

  

  saveForm(): void {

  }


}
