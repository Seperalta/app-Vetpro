import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassForgComponent } from './pass-forg/pass-forg.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pass-forg', component: PassForgComponent },
  { path: 'login', component: LoginComponent },

  // Agrega otras rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
