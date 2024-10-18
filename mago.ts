import { Personaje } from "./personaje";

export class Mago extends Personaje{
    private poderes: string;

    constructor(nombre: string, nivel: number, puntosDeVida: number, poderes: string){
        super(nombre, nivel, puntosDeVida)
        this.poderes = poderes;
    }


   public atacar(): void {
        console.log(`${this.nombre} ataca con hechizos`);
    }
   public defender(): void{
        console.log(`${this.nombre} se defiende con invisibilidad`);
        
    }
    

}