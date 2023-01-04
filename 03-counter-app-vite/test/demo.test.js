describe('Pruebas en <DemoComponent />', ()=>{
    test('Esta prueba no debe de fallar',()=>{
        // 1. Inicializacion
        const message1= 'Hola mundo';
    
        // 2. Accion
        const message2= message1.trim();
    
        // 3. Asserts
        expect(message1).toBe(message2);
    })
})