import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMascotaComponent } from './registro-mascota.component';

describe('RegistroMascotaComponent', () => {
  let component: RegistroMascotaComponent;
  let fixture: ComponentFixture<RegistroMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroMascotaComponent]
    });
    fixture = TestBed.createComponent(RegistroMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
