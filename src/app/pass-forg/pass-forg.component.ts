import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-forg',
  templateUrl: './pass-forg.component.html',
  styleUrls: ['./pass-forg.component.css']
})
export class PassForgComponent {
  email!: string;

  constructor(private router: Router) { }

  resetPassword() {
    // Lógica para restablecer la contraseña
    // Aquí puedes agregar el código necesario para enviar un correo electrónico de restablecimiento de contraseña, llamar a una API, etc.
    this.router.navigate(['/login']);
  }
}
