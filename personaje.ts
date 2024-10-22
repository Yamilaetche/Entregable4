import { Ataque } from "./Ataques/Ataque";

 export  class Personaje{
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;
    protected ataque: Ataque;

    constructor(nombre: string){
        
        this.nombre= nombre;
        this.nivel = 1;
        this.puntosDeVida = 50;
        this.ataque = new Ataque();
    }

    public atacar(): number{
        return this.ataque.atacar();
    }
    public defender(): string{
        return `${this.nombre} se está defendiendo`;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getNivel(): number{
        return this.nivel;
    }
    public getPuntosDeVida(): number{
        return this.puntosDeVida;
    }
    public subirNivel(): void{
        this.nivel++;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}`)
    }
    public setAtaque(ataques: Ataque): void{
        this.ataque= ataques;
    }
 
 
}