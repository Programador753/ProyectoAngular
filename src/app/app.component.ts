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
    <app-unalumno></app-unalumno>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  encabezado: string = 'DATOS COLEGIO';
  nombre: string = 'Salesianos';
  ciudad: string = 'Zaragoza';

  getNomreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }
}
