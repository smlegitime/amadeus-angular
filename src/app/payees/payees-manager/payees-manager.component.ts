import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Payee } from '../payee-types';
import { PayeesDaoService } from '../payees-dao.service';

enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styleUrls: ['./payees-manager.component.css'],
})
export class PayeesManagerComponent implements OnInit {
  payees: Payee[];
  lastSortField = '';
  lastSortDirection = SortDirection.asc;

  constructor(private dao: PayeesDaoService) {}

  ngOnInit() {
    this.dao.getPayees().subscribe(results => {
      this.payees = results;
    });
  }

  getSortClass(field: string) {
    if (field === this.lastSortField) {
      return this.lastSortDirection === SortDirection.asc ? 'sort-asc' : 'sort-desc';
    }

    return 'sort-blank';
  }

  handleHeaderClick(field: string) {
    let sortDirection = SortDirection.asc;

    if (this.lastSortField === field && this.lastSortDirection === SortDirection.asc) {
      sortDirection = SortDirection.desc;
    }

    this.payees = _.orderBy(this.payees, field, sortDirection);
    this.lastSortDirection = sortDirection;
    this.lastSortField = field;
  }
}
