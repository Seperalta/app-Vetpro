import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PassForgComponent } from './pass-forg/pass-forg.component';
import { AdminComponent } from './admin/admin.component';
import { AppMenuComponent } from './menu/menu.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { RegistroMascotaComponent } from './registro-mascota/registro-mascota.component';
import { RegistroPropietarioComponent } from './registro-propietario/registro-propietario.component';
import { ConsultaHistoriaMedicaComponent } from './consulta-historia-medica/consulta-historia-medica.component';
import { RegistroHistoriaMedicaComponent } from './registro-historia-medica/registro-historia-medica.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassForgComponent,
    AdminComponent,
    AppMenuComponent,
    AgendarCitaComponent,
    RegistroMascotaComponent,
    RegistroPropietarioComponent,
    ConsultaHistoriaMedicaComponent,
    RegistroHistoriaMedicaComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
