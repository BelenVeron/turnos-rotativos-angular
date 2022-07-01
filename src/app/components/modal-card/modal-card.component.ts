import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface Data {
  data: any[];
  title: string;
}

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent implements OnInit {

  data: any;
  title: string;


  constructor (
    public dialogRef: MatDialogRef<ModalCardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dataModal: Data,
    private router: Router
  ) {
    this.data = dataModal.data;
    this.title = dataModal.title;
  }
  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['empleado']);
  }

}
