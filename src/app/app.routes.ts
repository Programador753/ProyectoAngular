import { Routes } from '@angular/router';
import { UnalumnoComponent } from './alumnos/unalumno/unalumno.component';
import { AlumnosListadoComponent } from './alumnos/alumnos-listado/alumnos-listado.component';
import { AlumnoFormularioComponent } from './alumnos/alumno-formulario/alumno-formulario.component';

export const routes: Routes = [
    {path: '', redirectTo: '/alumno-lista', pathMatch: 'full'},
    {path: 'alumno', component: UnalumnoComponent},
    {path: 'alumno-lista', component: AlumnosListadoComponent},
    {path: 'alumno-insertar', component:AlumnoFormularioComponent},
    {path: 'alumno-insertar/:id', component: AlumnoFormularioComponent}
];
