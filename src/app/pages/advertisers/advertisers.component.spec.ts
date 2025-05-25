import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersComponent } from './advertisers.component';

describe('AdvertisersComponent', () => {
  let component: AdvertisersComponent;
  let fixture: ComponentFixture<AdvertisersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisersComponent]
    });
    fixture = TestBed.createComponent(AdvertisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
