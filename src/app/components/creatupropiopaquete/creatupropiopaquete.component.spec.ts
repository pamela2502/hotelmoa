import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatupropiopaqueteComponent } from './creatupropiopaquete.component';

describe('CreatupropiopaqueteComponent', () => {
  let component: CreatupropiopaqueteComponent;
  let fixture: ComponentFixture<CreatupropiopaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatupropiopaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatupropiopaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
