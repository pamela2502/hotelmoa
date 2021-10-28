import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarreservaComponent } from './insertarreserva.component';

describe('InsertarreservaComponent', () => {
  let component: InsertarreservaComponent;
  let fixture: ComponentFixture<InsertarreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarreservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
