import { getSaludo } from "../../base/02-template-string";

describe( 'Pruebas en 02-template.string.js', () => {

    test('getSaludo debe retornar Hola Augusto!', () => {

        const nombre = 'Augusto';

        const saludo = getSaludo( nombre );
        console.log(saludo);

        expect( saludo ).toBe('Hola ' + nombre + '!');

    })

    // getSaludo debe retornar 'Hola Emanuel' si no hay argumento en el nombre

    test('getSaludo debe retornar Hola Emanuel! por defecto si no hay argumento', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Emanuel!' );
    })
})