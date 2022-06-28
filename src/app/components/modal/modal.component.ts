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
    console.log(data);
    this.fields = data.fields;
    this.title = data.title;
    this.values = data.values;
  }

  ngOnInit(): void {
    this.createDataForm();
    console.log('init')
  }

  createDataForm():void {
    this.fields.forEach(field => {
      if (field.model) {
        let control: FormControl = new FormControl(field.model, Validators.required);
        this.dataForm.addControl(field.name, control);
        this.getValue(field);
      }
    });
  }

  getValue(field: any) {
    switch (field.type) {
      case 'hora':
        this.dataForm.controls[field.name].setValue(field.model.slice(0, -3))
        break;
      case 'fecha':
        this.dataForm.controls[field.name].setValue(moment(field.model, 'YYYY-MM-DD').toDate())
        break;
      case 'select':
        this.dataForm.controls[field.name].setValue(this.tipoJornadaEnum.getDescription(field.model))
      break;
      default:
      break;
    }
  }

  saveForm(): void {
    this.sendData.emit(this.dataForm.value);
    console.log(this.dataForm.value);
  }

  ngOnDestroy(): void {
    
  }
}
