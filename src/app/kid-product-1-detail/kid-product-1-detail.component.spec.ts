import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct1DetailComponent } from './kid-product-1-detail.component';

describe('KidProduct1DetailComponent', () => {
  let component: KidProduct1DetailComponent;
  let fixture: ComponentFixture<KidProduct1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct1DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
