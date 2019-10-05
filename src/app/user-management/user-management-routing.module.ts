import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListingComponent} from './user-listing/user-listing.component';

const  routes: Routes = [
  {path: '', component: UserListingComponent , children: [
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
