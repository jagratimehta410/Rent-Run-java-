import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct1Component } from './accessories-product-1.component';

describe('AccessoriesProduct1Component', () => {
  let component: AccessoriesProduct1Component;
  let fixture: ComponentFixture<AccessoriesProduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
