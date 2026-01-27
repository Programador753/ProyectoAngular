import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';
import { SelectorComponent } from './elementos/selector/selector.component';
import { AlumnosService } from './alumnos/alumnos.service';
import { Alumno } from './alumnos/Alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SelectorComponent],
  template: `
  <div  class="container mt-5">
  <app-selector
    label="Alumnos: "
    [options]="alumnos"
    (selectedValueChange)="onAlumnoChange($event)">
    ></app-selector>
  <p class="mt-3">Alumno seleccionado: {{selectedAlumno}}</p>
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
export class AppComponent implements OnInit{
  encabezado: string = 'DATOS COLEGIO';
  nombre: string = 'Salesianos';
  ciudad: string = 'Zaragoza';
  imagen: string = 'Real_Zaragoza_logo.svg';
  selectedAlumno: number = 0;

  getNomreCompleto(): string {
    return this.nombre + " " + this.ciudad;
  }

  alumnos: { value: number; text: string }[] = [];
  
  constructor(private alumnosService: AlumnosService) {
  }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data.map((alumno => ({
        value: alumno.id,
        text: alumno.nombre
      })));
    });
  }

  onAlumnoChange(opcionElegida: number): void {
    this.selectedAlumno = opcionElegida;
  }
}
