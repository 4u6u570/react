


const nombre   = 'Augusto';
const apellido = 'Salazar';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo( nombre = 'Emanuel') {
    return 'Hola ' + nombre + '!';
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );