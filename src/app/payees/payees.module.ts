import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';

@NgModule({
  declarations: [PayeesManagerComponent],
  imports: [CommonModule, PayeesRoutingModule],
  exports: [PayeesManagerComponent],
})
export class PayeesModule {}
