import { getHeroeById } from "./bases/import-export";


// const promesa=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("2 segundos despues!!");
//         const heroe=getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('THen de la promesa');
//     console.log(heroe);
// })

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe=getHeroeById(id);
            if(!heroe)reject('Heroe no encontrado');
            else resolve(heroe);
        }, 2000);
    })
};

getHeroeByIdAsync(18)
.then(console.log)
.catch(console.error);