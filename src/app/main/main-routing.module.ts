import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MasterComponent} from './master/master.component';

const  routes: Routes = [
  {path: '', component: MasterComponent , children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'writers', loadChildren: '../writer/writer.module#WriterModule'},
      {path: 'contents', loadChildren: '../content/content.module#ContentModule'},
      {path: 'users', loadChildren: '../user-management/user-management.module#UserManagementModule'},
    ]},

]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule { }
