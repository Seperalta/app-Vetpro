import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  @Input() option!: string;
  usuario: any = {}; // Objeto para almacenar los datos del usuario

  submitForm() {
    // Lógica para enviar el formulario de creación de usuario
    console.log('Formulario enviado:', this.usuario);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }
}
