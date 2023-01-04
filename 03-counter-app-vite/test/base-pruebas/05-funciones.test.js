import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'
describe('Test for file 05-funciones',()=>{
    test('getUSer debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto',()=>{
        const nombre= 'Rafael';
        const testUser = {
            uid: 'ABC567',
            username: nombre
        };
        expect(testUser).toStrictEqual(getUsuarioActivo(nombre));
    });
})