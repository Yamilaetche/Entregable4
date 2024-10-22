import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    private fuerza:number=20;
    private bloqueo:number=0;
    private disparoBloqueo:number=10;
    constructor(nombre: string) {
        super(nombre);
    }

    atacar(): number {
        this.addBloqueo();
        return this.ataque.atacar();
    }
    public addBloqueo():void{
        if(this.bloqueo<10) {
            this.bloqueo++;
        }
    }
    public defender(): string {
        if(this.bloqueo==this.disparoBloqueo){
            this.bloqueo=0;
            return `Bloqueo! ningun daño recibido`;
        }else
        return `${this.nombre} se está defendiendo.`;
    }

    public getFuerza():number{
        return this.fuerza;
    }
    public setFuerza(fuerza:number):void{
        if(fuerza>=0&&fuerza<100) {
            this.fuerza = fuerza;
        }
    }
}