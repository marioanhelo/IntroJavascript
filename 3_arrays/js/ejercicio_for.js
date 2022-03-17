/* Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
*Nota: sólo con for, no se vale usar funciones que ya existan */

let calificaciones = [9,10,10,9,8,9,6,7,8,9]
let promedio = 0
let suma = 0
let max= 0
let min= calificaciones[0]
let cantidad = calificaciones.length
for(i=0; i<cantidad; i++){
    suma += calificaciones[i];
    if (calificaciones[i] > max){
        max = calificaciones[i];
    }
    if (calificaciones[i] < min) {
        min = calificaciones[i];
    }
}
promedio = suma / cantidad;
alert(`El promedio de calificaciones es ${promedio}, el maximo es ${max} y el minimo es ${min}`)

/* Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...
*puedes poner un tope de cuántos elementos de la serie quieres Se empieza con numero
a = 0
b = 1
Al terminar
a = b
y...
b = a + b*/

let serie = [0,1]
let final = parseInt(prompt("Cuantos numeros de la serie Fibonnaci quieres?"))
for(i=2; i<=final; i++){
    serie.push(serie[i-1] + serie[i-2]);
}
console.log(`La serie fibonnaci es ${serie}`)

/* Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:
    *
   ***
  *****
 *******
********* */

let pisos = parseInt(prompt("Cuantos pisos quieres tu piramide?"))*2;
let n = (pisos/2)-1
let piramide ="";
let espacios =[];
for(x=0; x<=n; x++){
    espacios.push(" ")
}
for(i=1; i<=pisos; i++){
    if (i % 2 == 0) {
        piramide +="*";
      }else{
        espacios.pop()
        espacio2 = espacios.join('');
        piramide +="*";
        console.log(`${espacio2}${piramide}`);
      }
}

//Mostrar en la consola la table de un número (del 1 al 10)
// Tabla del 2
// 1 x 2 = 2
// 2 x 2 = 4
// 3 x 2 = 6
// .
// .
// 10 x 2 = 20

let tabla= parseInt(prompt("Que tabla de multiplicar quieres?"))
let finalTabla= parseInt(prompt("Hasta que numero quieres saber?"))
for(i=1; i<=finalTabla; i++){
    console.log(tabla*i)
}



// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?
for(i=1; i<=100; i++){
    if (i % 2 == 0) {
        console.log(i);
      }
}

//Escribir todos los números que terminan en 0 y estén entre 2 y 121

for(i=0; i<=121; i++){
    if (i % 10 == 0) {
        console.log(i);
      }
}