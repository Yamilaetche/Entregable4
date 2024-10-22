import {Mago} from "./Mago";
export class MagoLegendario extends Mago {
    private baculo:boolean=true;
    constructor(nombre:string) {
        super(nombre);
        this.puntosDeVida=200;
        this.mana=200;
    }

  public ataqueBaculo():string{
        if(this.baculo) {
            return "Golpe de Báculo - Convierte puntos de defensa enemigo en daño extra";
        }
        return "Golpe de puño";
  }

}