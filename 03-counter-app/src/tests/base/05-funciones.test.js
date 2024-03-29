import { getUser } from "../../base/05-funciones"
import { getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        expect(user).toEqual( userTest )
    })
    
    // Tarea: getUsuarioActivo debe retornar un objeto.

    test('getUsuarioActivo debe retornar un objeto ', () => {

        const nombre = 'Augusto';
        const user = getUsuarioActivo( nombre );

        const userTest = {
            uid: 'ABC567',
            username: nombre
        };
        
        expect(user).toEqual( userTest )
    })

})