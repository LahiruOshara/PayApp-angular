import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';
import {ElecBillOfficerComponent} from '../../elec-bill-officer/elec-bill-officer.component';
import {WaterBillOfficerComponent} from '../../water-bill-officer/water-bill-officer.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'elecBillOfficer', component: ElecBillOfficerComponent },
  {path: 'waterBillOfficer', component: WaterBillOfficerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
