// Desestructuración
//  Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const useContext = ({ clave, nombre, edad, rango = 'Capitán'}) => {
// console.log( nombre, edad, rango );

return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 12.456,
        lng: -14.587
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng} } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );