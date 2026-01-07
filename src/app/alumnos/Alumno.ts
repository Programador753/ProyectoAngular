export class Alumno {
  constructor(
    public nombre: string,
    public apellidos: string,
    public direccion: string,
    public fnac: string,
    public sexo: string,
    public nom_padre?: string
  ) {}
}
