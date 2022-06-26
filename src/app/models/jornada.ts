export class Jornada {

    id: number | null;
    tipo: string;
    fecha: string;
    horaEntrada: string;
    horaSalida: string;

    constructor(
        id: number | null,
        tipo: string,
        fecha: string,
        horaEntrada: string,
        horaSalida: string
    ) {
        this.id =  id;
        this.tipo =  tipo;
        this.fecha =  fecha;
        this.horaEntrada =  horaEntrada;
        this.horaSalida =  horaSalida;
    }

}