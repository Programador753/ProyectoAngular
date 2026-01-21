import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
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
}
