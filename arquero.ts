import { Personaje } from "./personaje";

export class Arquero extends Personaje{
    private capacidades: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, capacidades: string){
        super(nombre, nivel, puntosDeVida);
        this.capacidades = capacidades;
    }

    public atacar(): void {
        console.log(`${this.nombre} ataca lanzando flechas con su arco`);
    }
    public defender(): void{
        console.log(`${this.nombre} se defiende con un escudo de acero`);
        
    }
    

}