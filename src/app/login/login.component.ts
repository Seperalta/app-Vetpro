// login.component.ts
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  email!: string;
  password!: string;
  showPassForgComponent: boolean = false;

  forgotPassword() {
    this.router.navigate(['/pass-forg']);
  }

  login() {
    // Lógica para iniciar sesión
    this.router.navigate(['/admin'])
  }

}
