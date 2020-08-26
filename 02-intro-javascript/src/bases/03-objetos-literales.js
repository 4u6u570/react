const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4522524,
        lat: 45.656164,
        lng: 15.641654,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

// console.table( persona );
console.log( persona );
console.log( persona2 );