import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-registro-propietario',
  templateUrl: './registro-propietario.component.html',
  styleUrls: ['./registro-propietario.component.css']
})
export class RegistroPropietarioComponent {
  @Input() option!: string;
  propietario: any = {}; // Objeto para almacenar los datos del propietario

  submitForm() {
    // Lógica para enviar el formulario de registro de propietario
    console.log('Formulario enviado:', this.propietario);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }

  clearForm() {
    // Limpia los campos del formulario
    this.propietario = {};
  }
}
