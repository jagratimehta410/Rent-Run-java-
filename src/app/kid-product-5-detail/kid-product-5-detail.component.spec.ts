import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct5DetailComponent } from './kid-product-5-detail.component';

describe('KidProduct5DetailComponent', () => {
  let component: KidProduct5DetailComponent;
  let fixture: ComponentFixture<KidProduct5DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct5DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct5DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
