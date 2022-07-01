import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ITEMS } from './nav-bar-data';
import { MODAL_DATA } from 'src/app/pages/index/index-data';
import { MatDialog } from '@angular/material/dialog';
import { ModalCardComponent } from '../modal-card/modal-card.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  /* Items del navegador */
  items = ITEMS;
  title: string = 'Manejo de empleados';
  titleModal = 'Guía y descripción de la aplicación'
  modalData = MODAL_DATA;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private dialog: MatDialog
    ) {
    this.setTitle();
  }

  setTitle(): void {
    this.items.forEach(item =>{
      if (this.router.url === item.url) {
        this.title = item.title;
      }
    })
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
