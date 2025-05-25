import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubCounterComponent } from './pub-counter.component';

describe('PubCounterComponent', () => {
  let component: PubCounterComponent;
  let fixture: ComponentFixture<PubCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubCounterComponent]
    });
    fixture = TestBed.createComponent(PubCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
