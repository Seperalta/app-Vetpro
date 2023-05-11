import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassForgComponent } from './pass-forg.component';

describe('PassForgComponent', () => {
  let component: PassForgComponent;
  let fixture: ComponentFixture<PassForgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassForgComponent]
    });
    fixture = TestBed.createComponent(PassForgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
