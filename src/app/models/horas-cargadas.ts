export class HorasCargadas {

    horasCargadas: number | null;
    tipo: string;

    constructor(
        horasCargadas: number | null,
        tipo: string,
    ) {
        this.horasCargadas =  horasCargadas;
        this.tipo =  tipo;
    }

}