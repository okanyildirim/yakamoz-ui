import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterListingComponent } from './writer-listing/writer-listing.component';
import {WriterRoutingModule} from './writer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WriterRoutingModule
  ],
  declarations: [WriterListingComponent]
})
export class WriterModule { }
