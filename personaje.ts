
 export abstract class Personaje{
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, nivel: number, puntosDeVida: number){
        this.nombre= nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    abstract atacar(): void;
    abstract defender(): void;
}