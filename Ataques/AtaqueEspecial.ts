import {Ataque} from "./Ataque";

export class AtaqueEspecial extends Ataque{
private probabilidadCritico;

    constructor(){
        super();
        this.probabilidadCritico=1;
        this.setNombre("Destello místico");//si llegamos a ver algunos patrones de diseño podemos mejorar esto
        this.setDanio(70);//por el momento no veo mal un constructor asi, con las limitaciones que conlleva.
    }

    public atacar(): number{
        return this.getDanio()*this.probAtaqueCritico();
    };

    private probAtaqueCritico(){
        return Math.floor(Math.random() * this.probabilidadCritico);
    }

}