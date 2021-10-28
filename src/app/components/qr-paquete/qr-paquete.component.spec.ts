import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRPaqueteComponent } from './qr-paquete.component';

describe('QRPaqueteComponent', () => {
  let component: QRPaqueteComponent;
  let fixture: ComponentFixture<QRPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
