import {Ataque} from "./Ataque";

export class AtaqueDeFuego extends Ataque{
    private multiplicador:number=2;
    constructor(){
        super();
        this.nombre="Tormenta de Fuego";
    }
    public atacar(): number{
        return this.danioBase*this.multiplicador;
    };

}