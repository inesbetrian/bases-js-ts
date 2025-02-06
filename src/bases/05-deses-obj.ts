
interface Heros {
    nomen: string;
    aetas: number;
    codeNomen: string;
    facultatem?: string;
}



export const persona = {
    nomen:'Tony',
    aetas: 45,
    codeNomen: 'Iroman',  
    facultatem: 'money'  
}

//console.log(persona.nomen);

const { nomen, aetas, facultatem = 'No tiene poder'} = persona;

console.log( nomen, aetas, facultatem );