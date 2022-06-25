export class Empleado {

    id: number;
    nombre: string;
    apellido: string;
    dni: string;

    constructor(
        id: number,
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