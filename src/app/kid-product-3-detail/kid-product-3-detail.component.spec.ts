import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct3DetailComponent } from './kid-product-3-detail.component';

describe('KidProduct3DetailComponent', () => {
  let component: KidProduct3DetailComponent;
  let fixture: ComponentFixture<KidProduct3DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct3DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct3DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
