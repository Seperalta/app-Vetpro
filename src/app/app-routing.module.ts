import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassForgComponent } from './pass-forg/pass-forg.component';
import { AdminComponent } from './admin/admin.component';
import { AppMenuComponent } from './menu/menu.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { RegistroMascotaComponent } from './registro-mascota/registro-mascota.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pass-forg', component: PassForgComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'menu', component: AppMenuComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'registro-mascota', component: RegistroMascotaComponent },

  // Agrega otras rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
