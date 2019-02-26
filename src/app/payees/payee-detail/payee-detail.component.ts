import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '../payee-types';

@Component({
  selector: 'payee-detail',
  templateUrl: './payee-detail.component.html',
  styleUrls: ['./payee-detail.component.css']
})
export class PayeeDetailComponent implements OnInit {

  @Input()
  selectedPayee: Payee = null;

  constructor() { }

  ngOnInit() {
  }

}
