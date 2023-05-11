import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  @Input() option!: string;
  cita: any = {}; // Objeto para almacenar los datos del formulario

  submitForm() {
    if (this.isValidForm()) {
      // Realizar acción con los datos del formulario
      console.log(this.cita);
    }
  }

  isValidForm(): boolean {
    // Validar el formulario antes de enviarlo
    // Puedes implementar validaciones personalizadas aquí
    return (
      this.cita.fecha &&
      this.cita.nombrePropietario &&
      this.cita.identificacionPropietario &&
      this.cita.correoPropietario &&
      this.cita.nombreMascota &&
      this.cita.nombreVeterinaria &&
      this.cita.tipoConsulta &&
      this.cita.nombreDoctor
    );
  }
}
