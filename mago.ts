import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    protected mana:number=100;
    private multiplicador:number=1.5;
    constructor(nombre: string) {
        super(nombre);
    }

    public atacar(): number {
        if(this.mana>50) {
            return this.ataque.atacar() * this.multiplicador;
        }
        else return this.ataque.atacar();
    }

}