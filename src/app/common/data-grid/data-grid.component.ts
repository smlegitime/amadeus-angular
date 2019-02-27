import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { SortDirection } from 'src/app/payees/payee-types';

interface DataGridConfig {
  columns: string[];
}

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent<T> implements OnInit {

  lastSortField = '';
  lastSortDirection = SortDirection.asc;

  @Input()
  data: T[];

  @Input()
  config: DataGridConfig;

  @Output()
  selectRow = new EventEmitter<T>();

  constructor() { }

  ngOnInit() {
  }

  getItem(item: any, column: string) {
    return _.get(item, column);
  }

  formatColumn(column: string) {
    return _.startCase(column.split('.').slice(-1).join(''));
  }

  getSortClass(field: string) {
    if (field === this.lastSortField) {
      return this.lastSortDirection === SortDirection.asc ? 'sort-asc' : 'sort-desc';
    }

    return 'sort-blank';
  }

  handleRowClick(item: T) {
    console.log('You clicked on a row!');
    this.selectRow.emit(item);
  }

  handleHeaderClick(field: string) {
    let sortDirection = SortDirection.asc;

    if (this.lastSortField === field && this.lastSortDirection === SortDirection.asc) {
      sortDirection = SortDirection.desc;
    }

    this.data = _.orderBy(this.data, field, sortDirection);
    this.lastSortDirection = sortDirection;
    this.lastSortField = field;
  }
}
