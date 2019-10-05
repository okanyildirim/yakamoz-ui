import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './/user-management-routing.module';
import { UserListingComponent } from './user-listing/user-listing.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [UserListingComponent]
})
export class UserManagementModule { }
