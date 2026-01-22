import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkDesign } from './silk-design';

describe('SilkDesign', () => {
  let component: SilkDesign;
  let fixture: ComponentFixture<SilkDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilkDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilkDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
