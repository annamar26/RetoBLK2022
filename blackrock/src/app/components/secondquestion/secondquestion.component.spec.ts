import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondquestionComponent } from './secondquestion.component';

describe('SecondquestionComponent', () => {
  let component: SecondquestionComponent;
  let fixture: ComponentFixture<SecondquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
