import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


// firebase
import {AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule } from 'angularfire2/database';

// services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';
import { GuardService } from './services/guard.service';

// components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ElecBillOfficerComponent } from './elec-bill-officer/elec-bill-officer.component';
import { WaterBillOfficerComponent } from './water-bill-officer/water-bill-officer.component';
import { PoliceOfficerComponent } from './police-officer/police-officer.component';
import { TaxOfficerComponent } from './tax-officer/tax-officer.component';

import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './ui-components/nav-bar/nav-bar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ElectricityBillsComponent } from './electricity-bills/electricity-bills.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ElecBillOfficerComponent,
    WaterBillOfficerComponent,
    PoliceOfficerComponent,
    TaxOfficerComponent,
    HomeComponent,
    NavBarComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    ElectricityBillsComponent,
    PayBillsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule

  ],
  providers: [AuthenticationService,
    ValidateService,
    GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
