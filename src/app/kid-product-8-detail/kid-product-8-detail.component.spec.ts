import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct8DetailComponent } from './kid-product-8-detail.component';

describe('KidProduct8DetailComponent', () => {
  let component: KidProduct8DetailComponent;
  let fixture: ComponentFixture<KidProduct8DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct8DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct8DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
