import heroum, { dominis, type Dominus } from "../data/heroum";

console.log( dominis);

console.log( heroum );

export const obtineHeroPerId = (id: number) => {
    return heroum.find( (heros) => heros.id === id )
}

console.log(obtineHeroPerId(3));

 export const obtineHeroumPerDominus = (dominus:  'DC' | 'Marvel') => {

    return heroum.filter( heros => heros.dominus === dominus)
}

console.log(obtineHeroumPerDominus('DC'));