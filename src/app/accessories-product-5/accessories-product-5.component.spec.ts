import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProduct5Component } from './accessories-product-5.component';

describe('AccessoriesProduct5Component', () => {
  let component: AccessoriesProduct5Component;
  let fixture: ComponentFixture<AccessoriesProduct5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesProduct5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesProduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
