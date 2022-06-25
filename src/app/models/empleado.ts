export class Empleado {

    id: number | null;
    nombre: string;
    apellido: string;
    dni: string;

    constructor(
        id: number | null,
        nombre: string,
        apellido: string,
        dni: string
    ) {
        this.id =  id;
        this.nombre =  nombre;
        this.apellido =  apellido;
        this.dni =  dni;
    }

}