import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarcheckoutComponent } from './confirmarcheckout.component';

describe('ConfirmarcheckoutComponent', () => {
  let component: ConfirmarcheckoutComponent;
  let fixture: ComponentFixture<ConfirmarcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
