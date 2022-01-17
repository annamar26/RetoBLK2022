import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthquestionComponent } from './fourthquestion.component';

describe('FourthquestionComponent', () => {
  let component: FourthquestionComponent;
  let fixture: ComponentFixture<FourthquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
