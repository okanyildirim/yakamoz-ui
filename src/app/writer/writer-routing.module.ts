import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WriterListingComponent} from './writer-listing/writer-listing.component';
const  routes: Routes = [
  {path: '', component: WriterListingComponent , children: [
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
