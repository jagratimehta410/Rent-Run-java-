import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct8Component } from './accessories-product-8.component';

describe('AccessoriesProduct8Component', () => {
  let component: AccessoriesProduct8Component;
  let fixture: ComponentFixture<AccessoriesProduct8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
