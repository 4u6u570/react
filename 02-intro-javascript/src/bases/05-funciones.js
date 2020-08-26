// Funciones en JS

// Crear siempre funciones dentro de constantes para que sean inmutables
const saludar2 = function( nombre ) {
        return `Hola, ${ nombre }`
 };


//  Así no:
/* 

function saludar( nombre ) {
        return `Hola, ${ nombre }`
 };

 */

//  Funciones flecha (Arrow)
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABCD',
        username: 'El_Papi1542'
    }
}

const user = getUser();
console.log( user );

// Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

/* function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABCD',
        username: nombre
    }
};*/

const getUserActivo = (nombre) => ({
    uid: 'ABCD', 
    username: nombre
    });

const usuarioActivo = getUsuarioActivo('Augusto');
console.log( usuarioActivo );