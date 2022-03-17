//1. Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo
let x = Number(prompt("Escribe un numero"));
console.log(revisarNumero(x));
function revisarNumero(numero) {
    if(numero<0){
        return `El numero ${numero} es negativo`
    }else{
        return `El numero ${numero} es positivo`;
    }
}

//2. Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado
console.log(revisarAhorro("Mario Hdz", 10000));
function revisarAhorro(cliente, cantidadAhorro) {
  return `Nombre Cliente: ${cliente} con ahorro de $${cantidadAhorro}`;
}

// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

let cals = [10, 9, 8, 6, 8, 9, 10, 8, 10, 9];
console.log(promediarCalificaciones(cals));
function promediarCalificaciones(calificaciones) {
  let promedio = 0;
  let suma = 0;
  let cantidad = calificaciones.length;
  for (i = 0; i < cantidad; i++) {
    suma += calificaciones[i];
  }
  promedio = suma / cantidad;
  return `El promedio de calificaciones es ${promedio}`;
}

//4. Crear una función que reciba un número y nos diga si es par o impar
console.log(revisarParoImpar(5));
function revisarParoImpar(num) {
  if(num % 2 == 0){
    return `El numero ${num} es par`
  }else{
    return `El numero ${num} es impar`;
  }

}

// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)
console.log(revisarCupon("ABC"));
function revisarCupon(cupon) {
  switch (cupon) {
    case "ABC":
      return `El cupon ${cupon} tiene un valor de descuento de $1000`;
      break;
    case "DEF":
      return `El cupon ${cupon} tiene un valor de descuento de $2000`;
      break;
    case "GHI":
      return `El cupon ${cupon} tiene un valor de descuento de $500`;
      break;
    default:
      return "el cupon ingresado no existe";
      break;
  }
}

//6.  Crear una función que reciba base y lado de un triángulo y nos muestre cuál es su perímetro
console.log(calcularPerimetroTriangulo(10, 15));
function calcularPerimetroTriangulo(base, lado) {
  let perimetro = base + lado + lado;
  return `El perimetro del triangulo es ${perimetro}`;
}

// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área
console.log(calcularAreaTriangulo(10, 15));
function calcularAreaTriangulo(b, h) {
  let area = (b * h) / 2;
  return `El area del triangulo es ${area}`;
}

// 8. Crear una función que reciba 2 números y me entregue el número más alto
console.log(numeroMax(98, 76));
function numeroMax(numA, numB) {
  let numMax = Math.max(numA, numB);
  return `El numero mayor de los numeros ${numA} y ${numB} es ${numMax}`;
}

// 9. Crear una función que reciba 2 números y me entregue el número más pequeño
console.log(numeroMin(4, 9));
function numeroMin(num1, num2) {
  let numMin = Math.min(num1, num2);
  return `El numero menor de los numeros ${num1} y ${num2} es ${numMin}`;
}

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres
console.log(cantidadCaracteres("Perro","Gato","Cocodrilo"))
function cantidadCaracteres(texto1, texto2, texto3) {
  let numChar1 = texto1.length;
  let numChar2 = texto2.length;
  let numChar3 = texto3.length;

  if (numChar1 > numChar2 && numChar1 > numChar3) {
      return `El texto ${texto1} es el que tiene mas caracteres`
  }else if(numChar2 > numChar1 && numChar2 > numChar3){
    return `El texto ${texto2} es el que tiene mas caracteres`
  }else if(numChar3 > numChar1 && numChar2 < numChar3)
  return `El texto ${texto3} es el que tiene mas caracteres`
}

// 11. Crear una función que reciba 1 número y me lo muestre al cubo
console.log(calcularCubo(6));
function calcularCubo(num) {
  let cubo = num ** 3;
  return `El numero ${num} elevado al cubo es ${cubo}`;
}

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

console.log(calcularA("Animal"));
function calcularA(texto) {
  let letraa = [];
  for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === "a") {
      letraa.push(i);
    }
  }
  return `La letra a aparece ${letraa.length} veces`;
}

// 13. Crear una función que reciba una palabra y la transforme a minúsculas
console.log(cambiaraMinusculas("Este es mi texto de prueba para convertir a minusculas"));
function cambiaraMinusculas(texto) {
  let cambiarCadenaMin = texto.toLowerCase();
  return cambiarCadenaMin;
}

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas
console.log(cambiaraMayusculas("Este es mi texto de prueba para convertir a mayusculas"));
function cambiaraMayusculas(texto) {
  let cambiarCadenaMayus = texto.toUpperCase();
  return cambiarCadenaMayus;
}

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']
console.log(verificarArreglo(3));
function verificarArreglo(indice) {
  let datos = ["a", "b", "c", " d", "e", "f"];
  return datos[indice];
}
