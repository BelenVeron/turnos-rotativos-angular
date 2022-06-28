import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any;
  @Input() hidePaginator: boolean = false;
  @Output() sendData = new EventEmitter<any>();

  constructor(public _MatPaginatorIntl: MatPaginatorIntl) { }

  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items por pagina';
  }

  sendElement(element: any, button: string):void {
    let data = {
      type: button,
      data: element
    }
    this.sendData.emit(data);
  }

  /* Convierte el camel case en palabras */
  toWords(str: string) {
    const regex = /([A-Z])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g;
    return str.replace(regex, '$& ');
  }

  /* Devuelve true si es un boton, en este caso
     edit y delete, pero se puede agregar mas
  */
  isButton(type: string): boolean {
    let result = false;
    switch (type) {
      case 'edit':
        result = true
      break;
      case 'delete':
        result = true
      break;
    
      default:
        break;
    }
    return result;
  }

}
