import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';
import { AlumnosCountComponent } from '../alumnos-count/alumnos-count.component';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumnos-listado',
  imports: [CommonModule, AlumnoTituloPipe, AlumnosCountComponent],
  templateUrl: './alumnos-listado.component.html',
  styleUrl: './alumnos-listado.component.css',
  providers: [AlumnosService]
})
export class AlumnosListadoComponent implements OnInit {
  opcionSeleccionada: string = 'Todos';
  alumnos: Alumno[] = []
  
  constructor(private losAlumnos: AlumnosService) {}
  
  ngOnInit(): void {
    this.alumnos = this.losAlumnos.getAlumnos();
  }

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