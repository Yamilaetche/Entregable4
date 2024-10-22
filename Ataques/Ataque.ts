export class Ataque {
    protected danioBase: number;
    protected nombre: string;

    constructor(){
        this.danioBase = 35;
        this.nombre = "Ataque básico";
    }

    public atacar(): number{
        return this.danioBase;
    }
    public setDanio(danio: number){
        this.danioBase = danio;
    }
    public setNombre(nombre: string){
        this.nombre = nombre;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getDanio(): number{
        return this.danioBase;
    }

}