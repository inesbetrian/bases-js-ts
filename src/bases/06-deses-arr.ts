
const characters: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gotem'];

const [ g, v, t, g2, g3= 'Yamoshi'] = characters;

console.log({g ,v, t, g2, g3});

const returnAArray = () =>  {
   
    return [123, 'ABC'] as const;
} 

const [ numerus, litterae] = returnAArray();

console.log(numerus * 2, litterae.toLowerCase())

