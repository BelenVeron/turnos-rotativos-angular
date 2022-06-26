import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() data: any = {};
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
      this.dataForm.addControl(this.data.name, new FormControl('', Validators.required));
  }

  searchForm(): void {
    this.sendData.emit(this.dataForm.value);
    console.log(this.dataForm.value);
  }


}
