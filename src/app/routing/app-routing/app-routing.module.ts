import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';

import {ElecBillOfficerComponent} from '../../elec-bill-officer/elec-bill-officer.component';
import {WaterBillOfficerComponent} from '../../water-bill-officer/water-bill-officer.component';


import {HomeComponent} from '../../home/home.component';
import { GuardService } from '../../../app/services/guard.service'; // to guard the links
import {AdminHomeComponent} from '../../admin-home/admin-home.component';
import {CustomerHomeComponent} from '../../customer-home/customer-home.component';
import { PoliceOfficerComponent} from '../../police-officer/police-officer.component';
import {TaxOfficerComponent} from '../../tax-officer/tax-officer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent, canActivate: [GuardService]},
  {path: 'home', component: HomeComponent},

  //  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},

  {path: '', component: HomeComponent},
  {path: 'admin-home', component: AdminHomeComponent, canActivate: [GuardService]},
  {path: 'elecBillOfficer', component: ElecBillOfficerComponent },
  {path: 'waterBillOfficer', component: WaterBillOfficerComponent },
  {path: 'customer', component: CustomerHomeComponent},
  {path: 'polic-officer', component: PoliceOfficerComponent},
  {path: 'tax-officer', component: TaxOfficerComponent}
  // to guard links add the path like this--->>>
  //  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
