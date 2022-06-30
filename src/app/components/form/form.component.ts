import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ValidatorFn, Validators } from '@angular/forms';


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
  
  constructor(
    private formBuilder:FormBuilder
  ) {
    
  }
  
  ngOnInit(): void {
    this.createDataForm();
  }

  createDataForm():void {
    this.fields.forEach(field => {
      let control: FormControl = new FormControl('');
      this.dataForm.addControl(field.name, control);
      if (field.validations && field.validations.length > 0) {
        this.setValidation(field.validations, field.name);
      }
    });
  }

  setValidation(validations: any, name: string): void {
    console.log(validations)
      validations.forEach((element: any) => {
        switch (element.type) {
          case 'required':
            this.dataForm.get(name)?.addValidators(Validators.required)
            console.log(name)
          break;
          case 'minlength':
            this.dataForm.get(name)?.addValidators(Validators.minLength(element.value))
            console.log(name)
          break;
          case 'maxlength':
            this.dataForm.get(name)?.addValidators(Validators.maxLength(element.value))
            console.log(name)
          break;
        
          default:
          break;
        }
        
      });
    
  }

  saveForm(): void {
    this.sendData.emit(this.dataForm.value);
  }

  public hasError = (controlName: string, errorName: string) =>{
    let error = this.dataForm.controls[controlName].hasError(errorName);
    return error
  }

}
