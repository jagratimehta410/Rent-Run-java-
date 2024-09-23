import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidProduct7DetailComponent } from './kid-product-7-detail.component';

describe('KidProduct7DetailComponent', () => {
  let component: KidProduct7DetailComponent;
  let fixture: ComponentFixture<KidProduct7DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidProduct7DetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidProduct7DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
