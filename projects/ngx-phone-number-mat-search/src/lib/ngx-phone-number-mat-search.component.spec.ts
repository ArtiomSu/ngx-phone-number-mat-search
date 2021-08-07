import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPhoneNumberMatSearchComponent } from './ngx-phone-number-mat-search.component';

describe('NgxPhoneNumberMatSearchComponent', () => {
  let component: NgxPhoneNumberMatSearchComponent;
  let fixture: ComponentFixture<NgxPhoneNumberMatSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPhoneNumberMatSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPhoneNumberMatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
