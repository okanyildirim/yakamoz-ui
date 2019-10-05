import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainRoutingModule} from './main-routing.module';
import { MasterComponent } from './master/master.component';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    NgbDropdownModule
  ],
  declarations: [
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MasterComponent
  ]
})
export class MainModule { }
