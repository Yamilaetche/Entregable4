import { Arquero } from "./Arquero";

export class ArqueroDeElite extends Arquero {

    constructor(nombre: string) {
        super(nombre);
        this.puntosDeVida=200;
        this.precision=70;
    }

}