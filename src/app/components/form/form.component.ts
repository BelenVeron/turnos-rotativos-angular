import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  
  constructor(
    private formBuilder:FormBuilder
  ) {
    
  }
  
  ngOnInit(): void {
    this.createDataForm();
  }

  createDataForm():void {
    this.fields.forEach(field => {
      let control: FormControl = new FormControl('', Validators.required);
      this.dataForm.addControl(field.name, control);
    });
  }

  saveForm(): void {
    this.sendData.emit(this.dataForm.value);
    console.log(this.dataForm.value);
  }


}
