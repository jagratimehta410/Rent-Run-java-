import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct6DetailComponent } from './kid-product-6-detail.component';

describe('KidProduct6DetailComponent', () => {
  let component: KidProduct6DetailComponent;
  let fixture: ComponentFixture<KidProduct6DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct6DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct6DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
