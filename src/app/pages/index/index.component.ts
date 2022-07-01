import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCardComponent } from 'src/app/components/modal-card/modal-card.component';
import { MODAL_DATA } from './index-data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'Guía y descripción de la aplicación'
  modalData = MODAL_DATA;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.openModal();
  }

  openModal(): void {
     // abre el modal y envia los datos y configuracion
     var ref = this.dialog.open(ModalCardComponent, {
      width: '50%',
      autoFocus: false,
      maxHeight: '80vh', 
      data: {
        title: this.title,
        data: this.modalData
      }
    });
  }

}
