import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProductsComponent } from './kid-products.component';

describe('KidProductsComponent', () => {
  let component: KidProductsComponent;
  let fixture: ComponentFixture<KidProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
