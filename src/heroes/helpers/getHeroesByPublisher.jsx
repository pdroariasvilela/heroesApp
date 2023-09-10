import { heroes } from "../data/heroes";

export const  getHeroesPublisher = (publisher)=>{

    const validate = ['DC Comics' , 'Marvel Comics']

    if(!validate.includes(publisher)){
        throw new Error(`${publisher} no esta incluido`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher)
}