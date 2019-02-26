import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { BankingCommonModule } from '../common/banking-common.module';

@NgModule({
  declarations: [PayeesManagerComponent, PayeesListComponent, PayeeDetailComponent],
  imports: [CommonModule, BankingCommonModule, PayeesRoutingModule],
  exports: [PayeesManagerComponent],
})
export class PayeesModule {}
