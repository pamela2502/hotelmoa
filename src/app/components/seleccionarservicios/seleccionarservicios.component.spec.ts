import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarserviciosComponent } from './seleccionarservicios.component';

describe('SeleccionarserviciosComponent', () => {
  let component: SeleccionarserviciosComponent;
  let fixture: ComponentFixture<SeleccionarserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
