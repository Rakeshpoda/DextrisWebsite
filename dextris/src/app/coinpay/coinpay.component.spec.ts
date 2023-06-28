import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinpayComponent } from './coinpay.component';

describe('CoinpayComponent', () => {
  let component: CoinpayComponent;
  let fixture: ComponentFixture<CoinpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
