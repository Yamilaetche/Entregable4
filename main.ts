import {Guerrero} from "./Guerrero";
import {Mago} from "./Mago";
import {Arquero} from "./Arquero";
import {ArqueroDeElite} from "./ArqueroDeElite";
import {MagoLegendario} from "./MagoLegendario";
import {AtaqueEspecial} from "./Ataques/AtaqueEspecial";
import {AtaqueDeFuego} from "./Ataques/AtaqueDeFuego";
import {Personaje} from "./Personaje";

let heroe:Personaje=new Personaje("Zeus");
heroe=new Arquero("hood");
console.log(((heroe) as Arquero));//una opcion es representar la evolucion con una nueva clase

const ATAQUE_ESPECIAL=new AtaqueEspecial();//creamos 2 tipos de ataques especiales
const ATAQUE_FUEGO=new AtaqueDeFuego();//el ataque normal se asiga por defecto a todos los personajes

const GUERRERO = new Guerrero("Arthas");
const MAGO = new Mago("Jaina");
const ARQUERO = new Arquero("Legolas");
const MAGO_LEGENDARIO = new MagoLegendario("Thrall");
const ARQUERO_DE_ELITE = new ArqueroDeElite("Robin");

console.log(`Ataque de guerrero: ${GUERRERO.atacar()}`);
console.log(`Ataque de Mago: ${MAGO.atacar()}`);
console.log(`Ataque de arquero: ${ARQUERO.atacar()}`);
console.log(`Ataque de mago Legendario: ${MAGO_LEGENDARIO.atacar()}`);
console.log(`Ataque de Arquero de Elite: ${ARQUERO_DE_ELITE.atacar()}`);

MAGO.setAtaque(ATAQUE_FUEGO);//Gracias al polimorfismo cambiamos la forma de atacar de manera dinamica
console.log(`Ataque de Mago con ataque de fuego: ${MAGO.atacar()}`)//esto es lo que emula el aprender un ataque nuevo segun la consigna
MAGO_LEGENDARIO.setAtaque(ATAQUE_FUEGO);
console.log(`Ataque de fuego de mago Legendario: ${MAGO_LEGENDARIO.atacar()}`);
console.log(`Ataque de baculo: ${MAGO_LEGENDARIO.ataqueBaculo()}`);