import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas',()=>{
    test('getHeroeByIdAsync debe retornar un heroe',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id).then(hero=>{
            expect(hero.id).toBe(id);
            done();
        })
    })

    test('getHeroeByIdAsync debe obtener un heroe cuando no exisye',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
    })
})