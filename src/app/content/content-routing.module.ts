import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentListingComponent} from './content-listing/content-listing.component';

const  routes: Routes = [
  {path: '', component: ContentListingComponent , children: [
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
