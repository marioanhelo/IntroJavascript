// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero"] y nos regrese un arreglo con sólo los elementos tipo number

console.log(revisarArreglo([4, "dos", 8, "tres", 5, 9, 1, "cero"]));
function revisarArreglo(arreglo) {
  let arreglonumeros = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (!isNaN(arreglo[i])) {
      arreglonumeros.push(arreglo[i]);
    }
  }
  return arreglonumeros;
}

// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro
console.log(numerosPares(100));
function numerosPares(limite) {
  let pares = [];
  for (let i = 0; i <= limite; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  return pares;
}

// 3. Crear una función que me entregue un número entero random entre 1 y 100
console.log(numeroRandom());
function numeroRandom() {
  let numero = Math.floor(Math.random() * 100);
  return numero;
}

// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4,
//las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2


function codificar(mensaje){
    let txtencriptado = mensaje.replace(/a/ig, 4). replace(/e/ig, 3).replace(/i/ig, 7).replace(/o/ig, 6).replace(/u/ig, 2);
    return mensaje.value = txtencriptado;
}
console.log(codificar('este es mi texto de prueba para codificar'));

