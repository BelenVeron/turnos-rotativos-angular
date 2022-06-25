export class TipoJornada {

    id: number | null;
    tipo: string;

    constructor(
        id: number | null,
        tipo: string,
    ) {
        this.id =  id;
        this.tipo =  tipo;
    }

}