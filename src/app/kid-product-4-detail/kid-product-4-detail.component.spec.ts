import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct4DetailComponent } from './kid-product-4-detail.component';

describe('KidProduct4DetailComponent', () => {
  let component: KidProduct4DetailComponent;
  let fixture: ComponentFixture<KidProduct4DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct4DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct4DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
