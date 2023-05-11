import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.component.html',
  styleUrls: ['./registro-mascota.component.css']
})
export class RegistroMascotaComponent {
  @Input() option!: string;
  mascota: any = {}; // Objeto para almacenar los datos de la mascota

  submitForm() {
    // Lógica para enviar el formulario de registro de mascota
    console.log('Formulario enviado:', this.mascota);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }

  clearForm() {
    // Limpia los campos del formulario
    this.mascota = {};
  }
}
