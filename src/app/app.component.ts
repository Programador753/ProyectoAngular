import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnalumnoComponent } from './alumnos/unalumno/unalumno.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UnalumnoComponent],
  template: `
  <div align="center">
    <h1>{{ encabezado }}</h1>
    <h2>{{ getNomreCompleto() }}</h2>
    <img src="https://zaragoza.salesianos.edu/parroquia/wp-content/uploads/sites/10/2017/03/{{imagen}}" alt="Logo Colegio Salesianos">
    <app-unalumno></app-unalumno>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  encabezado: string = 'DATOS COLEGIO';
  nombre: string = 'Salesianos';
  ciudad: string = 'Zaragoza';
  imagen: string = 'logoPrincipal.png';

  getNomreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }
}
