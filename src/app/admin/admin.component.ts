import { Component } from '@angular/core';
import { AppMenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { AgendarCitaComponent } from '../agendar-cita/agendar-cita.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string;
  selectedOption!: string;
  showAgendarCita: boolean = false;
  showRegistroMascota: boolean = false;
  showRegistroPropietario: boolean = false;
  showConsultaHM: boolean = false;
  showRegistroHM: boolean = false;
  showCrearUsuario: boolean = false;
  isAsideCollapsed!: boolean;
  isMenuCollapsed: boolean = false;


  constructor(private router: Router) {
    // Asigna el nombre de usuario
    this.username = 'administrador';

  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  handleOptionSelected(option: string) {
    if (option === 'Agendar cita') {
      this.showAgendarCita = true;
    } else {
      this.showAgendarCita = false;
    }
    if (option === 'Registrar nueva mascota') {
      this.showRegistroMascota = true;
    } else {
      this.showRegistroMascota = false;
    }
    if (option === 'Registrar nuevo propietario') {
      this.showRegistroPropietario = true;
    } else {
      this.showRegistroPropietario = false;
    }
    if (option === 'Consulta historial medico') {
      this.showConsultaHM = true;
    } else {
      this.showConsultaHM = false;
    }
    if (option === 'Registro historia medica') {
      this.showRegistroHM = true;
    } else {
      this.showRegistroHM = false;
    }
    if (option === 'Creación de usuarios') {
      this.showCrearUsuario = true;
    } else {
      this.showCrearUsuario = false;
    }
  }

  toggleMenu() {
    this.isAsideCollapsed = !this.isAsideCollapsed;
  }
  

  logout() {
    // Lógica para cerrar sesión
    // ...
    this.router.navigate(['/login']);
  }
}
