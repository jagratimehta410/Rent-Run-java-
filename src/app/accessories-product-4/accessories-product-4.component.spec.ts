import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct4Component } from './accessories-product-4.component';

describe('AccessoriesProduct4Component', () => {
  let component: AccessoriesProduct4Component;
  let fixture: ComponentFixture<AccessoriesProduct4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
