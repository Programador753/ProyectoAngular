import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  getAlumnos(): Alumno[] {
    return [
      {nombre: 'Tadej', apellidos: 'Pogacar', direccion: 'Klanec, Eslovenia', fnac: '9/21/1998', sexo: 'Hombre' },
      {nombre: 'Primoz', apellidos: 'Roglic', direccion: 'Trbovlje, Eslovenia', fnac: '10/29/1989', sexo: 'Hombre' },
      {nombre: 'Wout', apellidos: 'Van Aert', direccion: 'Herentals, Bélgica', fnac: '9/15/1994', sexo: 'Hombre' },
      {nombre: 'Marianne', apellidos: 'Vos', direccion: 's-Hertogenbosch, Países Bajos', fnac: '5/13/1987', sexo: 'Mujer' },
      {nombre: 'Mathieu', apellidos: 'Van der Poel', direccion: 'Kapellen, Bélgica', fnac: '1/19/1995', sexo: 'Hombre' }
  ];
  }
}