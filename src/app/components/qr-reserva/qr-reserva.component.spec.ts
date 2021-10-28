import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRReservaComponent } from './qr-reserva.component';

describe('QRReservaComponent', () => {
  let component: QRReservaComponent;
  let fixture: ComponentFixture<QRReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
