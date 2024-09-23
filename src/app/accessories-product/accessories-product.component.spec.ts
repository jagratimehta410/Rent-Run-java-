import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProductComponent } from './accessories-product.component';

describe('AccessoriesProductComponent', () => {
  let component: AccessoriesProductComponent;
  let fixture: ComponentFixture<AccessoriesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
