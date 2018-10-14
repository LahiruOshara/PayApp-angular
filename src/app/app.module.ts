import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

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
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './ui-components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [AuthenticationService,
    ValidateService,
    GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
