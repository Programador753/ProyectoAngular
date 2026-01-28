import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { PaisesService } from '../../paises/paises.service';
import { Pais } from '../../paises/Pais';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { AlumnoTituloPipe } from '../alumno-titulo.pipe';

@Component({
  selector: 'app-alumno-listado2',
  imports: [CommonModule, RouterLink, BotonComponent, AlumnoTituloPipe],
  templateUrl: './alumno-listado2.component.html',
  styleUrl: './alumno-listado2.component.css'
})
export class AlumnoListado2Component {
  opcionSeleccionada: string = 'todos';
  alumnos: Alumno[] = []
  paises: Pais[] = []
  
  constructor(private losAlumnos: AlumnosService, private losPaises: PaisesService) {}
  
  ngOnInit(): void {

    this.losAlumnos.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
      console.log('Alumnos cargados:', this.alumnos);
    });
    
    this.losPaises.getPaises().subscribe((data: Pais[]) => {
      this.paises = data;
    });
  }

  alCambiarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  getNombrePais(paisID: number): string {
    const pais = this.paises.find(p => p.id === paisID);
    return pais ? pais.nomPais : '';
  }

  getAlumnosPorPais(pais: string): number {
    return this.alumnos.filter(alumno => alumno.pais === pais).length;
  }

  eliminarAlumno(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      this.losAlumnos.deleteAlumno(id).subscribe(() => {
        this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    });
    }
  }


}
