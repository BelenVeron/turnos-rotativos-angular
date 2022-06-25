import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any;
  @Output() sendData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteElement(element: any):void {
    this.sendData.emit(element);
  }

}
