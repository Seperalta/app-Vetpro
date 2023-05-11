import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-historia-medica',
  templateUrl: './registro-historia-medica.component.html',
  styleUrls: ['./registro-historia-medica.component.css']
})
export class RegistroHistoriaMedicaComponent {
  @Input() option!: string;
  historia: any = {}; // Objeto para almacenar los datos del formulario

  submitForm() {
    // Lógica para enviar el formulario
    console.log(this.historia); // Puedes reemplazar esto con la lógica de envío de datos
  }

  resetForm() {
    // Lógica para limpiar el formulario
    this.historia = {};
  }
}
