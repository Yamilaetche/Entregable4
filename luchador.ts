import { Personaje } from "./personaje";

export class Luchador extends Personaje{
    private habilidades: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, habilidades: string){
        super(nombre, nivel, puntosDeVida);
        this.habilidades = habilidades;
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca con golpes y patadas`);
    }
    public defender(): void{
        console.log(`${this.nombre} se defiende cubriéndose y saltando`);
        
    }
    

}