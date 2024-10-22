import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    protected precision:number=50;
    private veneno:number=5;
    constructor(nombre: string) {
        super(nombre);
    }

     atacar(): number {
        if(this.veneno>0) {
            this.veneno--;
            return this.ataque.atacar() * this.veneno;
        }
        return this.ataque.atacar();
    }
    public addVeneno():void{
        if(this.veneno<5) {
            this.veneno++;
        }
    }

}