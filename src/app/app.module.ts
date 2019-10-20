import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainModule} from './main/main.module';
import {AuthModule} from './auth/auth.module';
// import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MainModule,
    AuthModule,
    NgbModule.forRoot(),
   // ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
