import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

interface DataGridConfig {
  columns: string[];
}

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input()
  data: any[];

  @Input()
  config: DataGridConfig;

  @Output()
  selectRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getItem(item: any, column: string) {
    return _.get(item, column);
  }

  formatColumn(column: string) {
    return _.startCase(column.split('.').slice(-1).join(''));
  }

}
