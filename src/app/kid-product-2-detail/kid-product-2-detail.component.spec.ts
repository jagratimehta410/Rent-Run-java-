import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct2DetailComponent } from './kid-product-2-detail.component';

describe('KidProduct2DetailComponent', () => {
  let component: KidProduct2DetailComponent;
  let fixture: ComponentFixture<KidProduct2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct2DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
