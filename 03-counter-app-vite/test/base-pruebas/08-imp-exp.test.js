import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas archivo 08-imp-exp',()=>{
    test('getHeroeById',()=>{
        const id= 1;
        const hero=getHeroeById(id);
        expect(hero.id).toEqual(id);
    })

    test('getHeroeById Wrong id',()=>{
        const id= -1;
        const hero=getHeroeById(id);
        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner DC',()=>{
        const heroes=getHeroesByOwner('DC');
        const expectedHeroesArray=[
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];

        expect(heroes).toHaveLength(3);

        expect(heroes).toEqual(expectedHeroesArray)

        expect(heroes).toContainEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
        expect(heroes).toContainEqual({
            id: 3,
            name: 'Superman',
            owner: 'DC'
        });
        expect(heroes).toContainEqual({
            id: 4,
            name: 'Flash',
            owner: 'DC'
        });
    })

    test('getHeroesByOwner Marvel',()=>{
        const heroes=getHeroesByOwner('Marvel');
        expect(heroes).toHaveLength(2);
    })
})