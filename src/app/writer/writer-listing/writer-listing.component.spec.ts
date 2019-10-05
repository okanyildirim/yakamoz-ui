import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterListingComponent } from './writer-listing.component';

describe('WriterListingComponent', () => {
  let component: WriterListingComponent;
  let fixture: ComponentFixture<WriterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
