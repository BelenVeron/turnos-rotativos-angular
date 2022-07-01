import { Component, Output, EventEmitter, Inject, OnInit, Optional, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { TipoJornadaEnumService } from 'src/app/services/tipo-jornada-enum.service';

export interface Data {
  fields: any[];
  dni: string;
  title: string;
  values: any;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: string = '';
  fields: any[] = [];
  values: any;
  dataForm: FormGroup = new FormGroup({});
  @Output() sendData = new EventEmitter<any>();
  

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Data,
    public tipoJornadaEnum: TipoJornadaEnumService
    ) {
    this.fields = data.fields;
    this.title = data.title;
    this.values = data.values;
  }

  ngOnInit(): void {
    this.createDataForm();
  }

  /* 
    Crea el formulario agregando los campos de acuerdo a los 
    items que se setean en fields desde el componente que lo
    contiene y se construye un formControl con las validaciones
    que se necesitan.
    Se setea el valor que ya estaba ingresado en el objeto
  */
  createDataForm():void {
    this.fields.forEach(field => {
      if (field.type) {
        let control: FormControl = new FormControl(field.model, Validators.required);
        this.dataForm.addControl(field.name, control);
        this.getValue(field);
        if (field.validations && field.validations.length > 0) {
          this.setValidation(field.validations, field.name);
        }
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
    Se setea el valor del objeto al campo correspondiente
  */
  getValue(field: any) {
    switch (field.type) {
      case 'hora':
        this.dataForm.controls[field.name].setValue(field.model.slice(0, -3))
        break;
      case 'fecha':
        this.dataForm.controls[field.name].setValue(moment(field.model, 'DD-MM-YYYY').toDate())
        break;
      case 'select':
        this.dataForm.controls[field.name].setValue(this.tipoJornadaEnum.getDescription(field.model))
      break;
      default:
      break;
    }
  }

  /* 
    Se agrega los valores del fromulario mas el dni,
    Se envia el evento, y se cierra el modal enviando
    los datos
  */
  saveForm(): void {
    Object.assign(this.dataForm.value, this.fields[0]);
    this.sendData.emit(this.dataForm.value);
    
    this.dialogRef.close({ data: {
      values: this.dataForm.value,
      dni: this.fields[0].dni,
    } });
  }

}
