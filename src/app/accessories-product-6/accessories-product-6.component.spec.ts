import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct6Component } from './accessories-product-6.component';

describe('AccessoriesProduct6Component', () => {
  let component: AccessoriesProduct6Component;
  let fixture: ComponentFixture<AccessoriesProduct6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
