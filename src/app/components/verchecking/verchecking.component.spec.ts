import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercheckingComponent } from './verchecking.component';

describe('VercheckingComponent', () => {
  let component: VercheckingComponent;
  let fixture: ComponentFixture<VercheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
