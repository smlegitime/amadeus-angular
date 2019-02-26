import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Payee } from '../payee-types';
import { PayeesDaoService } from '../payees-dao.service';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styleUrls: ['./payees-manager.component.css'],
})
export class PayeesManagerComponent implements OnInit {
  payees: Payee[];
  selectedPayee: Payee = null;

  constructor(private dao: PayeesDaoService) {}

  ngOnInit() {
    this.dao.getPayees().subscribe(results => {
      this.payees = results;
    });
  }

  handleSelectPayee(payee: Payee) {
    console.log('You selected ' + payee.payeeName);
    this.selectedPayee = payee;
  }
}
