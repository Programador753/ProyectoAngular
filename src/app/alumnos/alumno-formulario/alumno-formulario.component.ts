import { Component } from '@angular/core';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumno-formulario',
  imports: [FormsModule],
  templateUrl: './alumno-formulario.component.html',
  styleUrl: './alumno-formulario.component.css'
})
export class AlumnoFormularioComponent {
  alumno: Alumno = new Alumno(0, '', '', '', 1, '', '', '');

  constructor(private alumnoService: AlumnosService) { }
  onSubmit(){
    this.alumnoService.addAlumno(this.alumno).subscribe();
  }
}
