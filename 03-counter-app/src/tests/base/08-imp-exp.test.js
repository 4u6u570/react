import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {

    test('Debe retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        console.log( heroe );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    })


test('Debe retornar undefined si Héroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById( id );

    expect( heroe ).toBe( undefined );

    })
})

// Debe retornar un arreglo con los héroes de DC
// owner
// toEqual al arreglo filtrado.

describe('Pruebas en funciones de Owner', () => {

test('Debe retornar un arreglo con los héroes de DC', () => {
   
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );
   
    const heroesData = heroes.filter( h => h.owner === owner );
    expect( heroes ).toEqual( heroesData );

    })


//length = 2 // toBe


    test('Debe retornar un arreglo con los héroes de Marvel', () => {
       
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 2 );
    
        })
    })