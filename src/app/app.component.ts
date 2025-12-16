import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnalumnoComponent } from './alumnos/unalumno/unalumno.component';
import { AlumnosListadoComponent } from './alumnos/alumnos-listado/alumnos-listado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UnalumnoComponent, AlumnosListadoComponent],
  template: `
  <div align="center">
    <h1>{{ encabezado }}</h1>
    <h2>{{ getNomreCompleto() }}</h2>
    <img src="https://upload.wikimedia.org/wikipedia/en/6/69/{{imagen}}" alt="Logo Colegio Salesianos">
    <app-unalumno></app-unalumno>
    <app-alumnos-listado></app-alumnos-listado>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  encabezado: string = 'DATOS COLEGIO';
  nombre: string = 'Salesianos';
  ciudad: string = 'Zaragoza';
  imagen: string = 'Real_Zaragoza_logo.svg';

  getNomreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }
}
