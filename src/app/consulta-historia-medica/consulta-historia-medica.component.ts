import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-historia-medica',
  templateUrl: './consulta-historia-medica.component.html',
  styleUrls: ['./consulta-historia-medica.component.css']
})
export class ConsultaHistoriaMedicaComponent {
  @Input() option!: string;
  searchQuery: string = ''; // Variable para almacenar la búsqueda del usuario
  historias: any[] = [
    {
      identificador: '1',
      nombreMascota: 'Mascota 1',
      nombrePropietario: 'Propietario 1',
      identificacionPropietario: '123456789',
      medicoTratante: 'Médico 1',
      observaciones: 'Observación 1',
      tratamiento: 'Tratamiento 1',
      fechaCita: '2023-05-01'
    },
    {
      identificador: '2',
      nombreMascota: 'Mascota 2',
      nombrePropietario: 'Propietario 2',
      identificacionPropietario: '987654321',
      medicoTratante: 'Médico 2',
      observaciones: 'Observación 2',
      tratamiento: 'Tratamiento 2',
      fechaCita: '2023-05-02'
    },
    {
      identificador: '3',
      nombreMascota: 'Mascota 3',
      nombrePropietario: 'Propietario 3',
      identificacionPropietario: '456789123',
      medicoTratante: 'Médico 3',
      observaciones: 'Observación 3',
      tratamiento: 'Tratamiento 3',
      fechaCita: '2023-05-03'
    },
    {
      identificador: '4',
      nombreMascota: 'Mascota 4',
      nombrePropietario: 'Propietario 4',
      identificacionPropietario: '321654987',
      medicoTratante: 'Médico 4',
      observaciones: 'Observación 4',
      tratamiento: 'Tratamiento 4',
      fechaCita: '2023-05-04'
    }
  ];

  buscar() {
    // Lógica para realizar la búsqueda de historias clínicas según el valor de "searchQuery"
    // Puedes implementar aquí tu propia lógica de búsqueda
    console.log('Realizando búsqueda:', this.searchQuery);
  }
}
