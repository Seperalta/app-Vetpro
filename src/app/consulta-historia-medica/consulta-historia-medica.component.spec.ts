import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHistoriaMedicaComponent } from './consulta-historia-medica.component';

describe('ConsultaHistoriaMedicaComponent', () => {
  let component: ConsultaHistoriaMedicaComponent;
  let fixture: ComponentFixture<ConsultaHistoriaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaHistoriaMedicaComponent]
    });
    fixture = TestBed.createComponent(ConsultaHistoriaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
