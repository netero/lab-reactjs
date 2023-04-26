import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await',()=>{
    test('getImagen obtiene Url', async ()=>{
        const url = await getImagen();
        console.log(url);
        expect(url).toEqual(expect.any(String));
    })
})