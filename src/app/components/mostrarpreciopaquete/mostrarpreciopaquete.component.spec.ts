import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpreciopaqueteComponent } from './mostrarpreciopaquete.component';

describe('MostrarpreciopaqueteComponent', () => {
  let component: MostrarpreciopaqueteComponent;
  let fixture: ComponentFixture<MostrarpreciopaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpreciopaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarpreciopaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
