import { AgendarCitaComponent } from '../agendar-cita/agendar-cita.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AppMenuComponent {
  constructor(private router: Router) {}
  @Input() selectedOption!: string;
  @Output() optionSelected = new EventEmitter<string>();

  menuOptions: string[] = ['Agendar cita', 'Registrar nueva mascota', 'Registrar nuevo propietario', 'Consulta historial medico', 'Registro historia medica', 'Creación de usuarios'];

  selectOption(option: string) {
    this.optionSelected.emit(option);
  }
  
}
