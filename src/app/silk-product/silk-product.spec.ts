import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkProduct } from './silk-product';

describe('SilkProduct', () => {
  let component: SilkProduct;
  let fixture: ComponentFixture<SilkProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilkProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilkProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
