import { heroes,owners } from "../data/heroes";
//import heroesDefault from "./data/heroesDefault";


//console.log(heroes);

export const getHeroeById=(id)=>{
    return heroes.find((heroe)=>heroe.id===id);
}

//console.log(getHeroe(1));

export const getHeroesByOwner=(owner)=>heroes.filter(heroe=>heroe.owner===owner);
//console.log(getHeroesByOwner(owners.marvel));


//export por defecto
//console.log(heroesDefault);