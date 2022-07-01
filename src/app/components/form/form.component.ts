import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title: string = '';
  @Input() fields: any[] = [];
  dataForm: FormGroup = new FormGroup({});
  @Output() sendData = new EventEmitter<any>();
  buttonDisabled: boolean = true;
  
  constructor() {}
  
  ngOnInit(): void {
    this.createDataForm();
  }

  /* 
    Crea el formulario agregando los campos de acuerdo a los 
    items que se setean en fields desde el componente que lo
    contiene y se construye un formControl con las validaciones
    que se necesitan
  */
  createDataForm():void {
    this.fields.forEach(field => {
      let control: FormControl = new FormControl('');
      this.dataForm.addControl(field.name, control);
      if (field.validations && field.validations.length > 0) {
        this.setValidation(field.validations, field.name);
      }
    });
  }

  /* 
    Agrega las validaciones segun se necesiten al campo
    correspondiente
  */
  setValidation(validations: any, name: string): void {
      validations.forEach((element: any) => {
        switch (element.type) {
          case 'required':
            this.dataForm.get(name)?.addValidators(Validators.required)
          break;
          case 'minlength':
            this.dataForm.get(name)?.addValidators(Validators.minLength(element.value))
          break;
          case 'maxlength':
            this.dataForm.get(name)?.addValidators(Validators.maxLength(element.value))
          break;
        
          default:
          break;
        }
        
      });
  }

  /* 
    Envia los datos del formulario con sus valores
    al emitir el evento sendData
  */
  saveForm(): void {
    this.sendData.emit(this.dataForm.value);
  }

  /* 
    Detecta el error, es mostrado en mat-error
  */
  public hasError = (controlName: string, errorName: string) =>{
    let error = this.dataForm.controls[controlName].hasError(errorName);
    return error
  }

}
