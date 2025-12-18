import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';
import { AlumnosCountComponent } from '../alumnos-count/alumnos-count.component';

@Component({
  selector: 'app-alumnos-listado',
  imports: [CommonModule, AlumnoTituloPipe, AlumnosCountComponent],
  templateUrl: './alumnos-listado.component.html',
  styleUrl: './alumnos-listado.component.css'
})
export class AlumnosListadoComponent {
    alumnos: any[] = [
      {nombre: 'Tadej', apellidos: 'Pogacar', direccion: 'Klanec, Eslovenia', fnac: '9/21/1998', sexo: 'Hombre' },
      {nombre: 'Primoz', apellidos: 'Roglic', direccion: 'Trbovlje, Eslovenia', fnac: '10/29/1989', sexo: 'Hombre' },
      {nombre: 'Wout', apellidos: 'Van Aert', direccion: 'Herentals, Bélgica', fnac: '9/15/1994', sexo: 'Hombre' },
      {nombre: 'Marianne', apellidos: 'Vos', direccion: 's-Hertogenbosch, Países Bajos', fnac: '5/13/1987', sexo: 'Mujer' },
      {nombre: 'Mathieu', apellidos: 'Van der Poel', direccion: 'Kapellen, Bélgica', fnac: '1/19/1995', sexo: 'Hombre' }
  ]
  opcionSeleccionada: string = 'todos';
  
  alCambiarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  getTodos(): number {
    return this.alumnos.length;
  }

  getHombres(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Hombre').length;
  }

  getMujeres(): number {
    return this.alumnos.filter(alumno => alumno.sexo === 'Mujer').length;
  }

}