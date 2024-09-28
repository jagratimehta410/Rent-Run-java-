import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct2Component } from './accessories-product-2.component';

describe('AccessoriesProduct2Component', () => {
  let component: AccessoriesProduct2Component;
  let fixture: ComponentFixture<AccessoriesProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
