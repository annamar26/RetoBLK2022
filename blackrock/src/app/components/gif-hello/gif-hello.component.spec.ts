import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifHelloComponent } from './gif-hello.component';

describe('GifHelloComponent', () => {
  let component: GifHelloComponent;
  let fixture: ComponentFixture<GifHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
