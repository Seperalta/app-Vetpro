import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHistoriaMedicaComponent } from './registro-historia-medica.component';

describe('RegistroHistoriaMedicaComponent', () => {
  let component: RegistroHistoriaMedicaComponent;
  let fixture: ComponentFixture<RegistroHistoriaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHistoriaMedicaComponent]
    });
    fixture = TestBed.createComponent(RegistroHistoriaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
