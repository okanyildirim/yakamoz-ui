import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './/content-routing.module';
import { ContentListingComponent } from './content-listing/content-listing.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [ContentListingComponent]
})
export class ContentModule { }
