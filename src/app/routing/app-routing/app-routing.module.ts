import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';
<<<<<<< HEAD
import {ElecBillOfficerComponent} from '../../elec-bill-officer/elec-bill-officer.component';
import {WaterBillOfficerComponent} from '../../water-bill-officer/water-bill-officer.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'elecBillOfficer', component: ElecBillOfficerComponent },
  {path: 'waterBillOfficer', component: WaterBillOfficerComponent }
=======
import {HomeComponent} from '../../home/home.component';
import { GuardService } from '../../../app/services/guard.service'; // to guard the links
import {AdminHomeComponent} from '../../admin-home/admin-home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent,canActivate: [GuardService]},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'admin-home', component: AdminHomeComponent, canActivate: [GuardService]}

  // to guard links add the path like this--->>>
  //  {path: 'admin', component: AdminComponent, canActivate: [GuardService]},
>>>>>>> 7c27166ee4b7f681dcd949a3f7213ba4409845a6
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
