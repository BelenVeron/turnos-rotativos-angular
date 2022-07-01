import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() data: any = {};
  dataForm: FormGroup = new FormGroup({});
  @Output() sendData = new EventEmitter<any>();
  
  constructor() {
    
  }
  
  ngOnInit(): void {
    this.createDataForm();
  }

  /* 
    Crea el input con las validaciones que se necesita.
  */
  createDataForm():void {
      this.dataForm.addControl(this.data.name, new FormControl('', Validators.required));
      if (this.data.validations && this.data.validations.length > 0) {
        this.setValidation(this.data.validations, this.data.name);
      }
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
    Se envia el valor del dato a travez del evento
    sendData
  */
  searchForm(): void {
    this.sendData.emit(this.dataForm.value);
  }


}
