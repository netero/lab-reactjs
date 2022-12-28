//variables y constantes
const nombre='Rafael';
let apellido="Morales"; 

//Desestructuracion

const persona={
    nombre:'Tony',
    edad:32,
    clave:'Ironman',
    rango:'Soldado'
};

//Extrae la edad de persona y crea una constante con ese nombre

const {edad} = persona;
const {nombre:nombre2} = persona;
console.log(edad, nombre2);

//Desestructuracion en parametros de funcion
const retornaPersona=({clave,edad,nombre, rango = 'Capitán'}) => {
    //console.log(nombre,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latLng:{
            lat:10,
            lng:9
        }
    }
};
const {nombreClave,anios, latLng:{lat,lng}}=retornaPersona(persona);
console.log(nombreClave,anios,lat,lng);

//Desestructuracion de arreglos
const personajes=['goku','vegenta','trunks'];
console.log(personajes[0],personajes[2]);

const [p1,,p3]=personajes;
console.log(p1,p3);


const retornaArreglo=()=>{
    return ['ABC',123];
}

const [letras,numeros]=retornaArreglo();
console.log(letras,numeros);

const fncUseState=(valor)=>{
    return [valor, ()=>{console.log('Hola Mundo!!')}];
}

const [nombre1,setNombre]=fncUseState('Goku');
console.log(nombre1);
setNombre();