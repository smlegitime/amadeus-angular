import { Component, OnInit, Input } from '@angular/core';
import { Payee, SortDirection } from '../payee-types';
import * as _ from 'lodash';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styleUrls: ['./payees-list.component.css']
})
export class PayeesListComponent implements OnInit {

  lastSortField = '';
  lastSortDirection = SortDirection.asc;

  @Input()
  inputPayees: Payee[];

  constructor() { }

  ngOnInit() {
  }

  handleHeaderClick(field: string) {
    let sortDirection = SortDirection.asc;

    if (this.lastSortField === field && this.lastSortDirection === SortDirection.asc) {
      sortDirection = SortDirection.desc;
    }

    this.inputPayees = _.orderBy(this.inputPayees, field, sortDirection);
    this.lastSortDirection = sortDirection;
    this.lastSortField = field;
  }


  getSortClass(field: string) {
    if (field === this.lastSortField) {
      return this.lastSortDirection === SortDirection.asc ? 'sort-asc' : 'sort-desc';
    }

    return 'sort-blank';
  }


}
