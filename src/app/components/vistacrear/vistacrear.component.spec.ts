import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacrearComponent } from './vistacrear.component';

describe('VistacrearComponent', () => {
  let component: VistacrearComponent;
  let fixture: ComponentFixture<VistacrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
