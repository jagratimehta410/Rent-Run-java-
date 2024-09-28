import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct7Component } from './accessories-product-7.component';

describe('AccessoriesProduct7Component', () => {
  let component: AccessoriesProduct7Component;
  let fixture: ComponentFixture<AccessoriesProduct7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
