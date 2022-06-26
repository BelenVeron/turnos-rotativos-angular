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

  deleteElement(element: any):void {
    this.sendData.emit(element);
  }

}
