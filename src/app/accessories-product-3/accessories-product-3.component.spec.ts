import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct3Component } from './accessories-product-3.component';

describe('AccessoriesProduct3Component', () => {
  let component: AccessoriesProduct3Component;
  let fixture: ComponentFixture<AccessoriesProduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
