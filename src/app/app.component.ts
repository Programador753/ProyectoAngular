import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';
import { SelectorComponent } from './elementos/selector/selector.component';
import { AlumnosService } from './alumnos/alumnos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SelectorComponent],
  template: `
  <div  class="container mt-5">
  <app-selector
    label="Alumnos: "
    [options]="Alumnos">
  </app-selector>
  </div>
    <app-menu
    [title]="'Salesianos'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'fa fa-home'},
      {label: 'Alumno', link: '/alumno', icono: 'fa fa-user'},
      {label: 'Listado', link: '/alumno-lista', icono: 'fa fa-film'},
      {label: 'Insertar', link: '/alumno-insertar', icono: 'fa fa-pen'} 
    ]">
    </app-menu>
    <div class="container mt-4">
      <router-outlet></router-outlet>
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

  Alumnos: any[] = []
  // Metodo para cargar los alumnos desde el observable del servicio
  cargarAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.Alumnos = data.map(alumno => ({
        value: alumno.id,
        text: `${alumno.nombre}`
      }));
    });
  }
  constructor(private alumnosService: AlumnosService) {
    this.cargarAlumnos();
  }
}
