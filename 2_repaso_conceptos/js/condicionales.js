// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

let numero = Number(prompt("Escribe un numero"));
numero % 5 === 0
  ? console.log(`Tu numero ${numero} si es cool`)
  : console.log(`Tu numero ${numero} no es cool`);

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

let codigo = prompt("Escribe el codigo");

if (codigo == "happy") {
  console.log("cool bro, the life is short");
} else if (codigo == "sad") {
  console.log("go for tacos bro, tacos = smile");
} else {
  console.log("codigo invalido");
}

//Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

let nivel = Number(prompt("Cual es tu nivel"));
nivel >= 0 && nivel <= 10
  ? console.log("Nivel Paladin")
  : nivel >= 11 && nivel <= 30
  ? console.log("Nivel caballero dorado")
  : nivel >= 31 && nivel <= 50
  ? console.log("Dios Destructor")
  : alert("Nivel no valido");

// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

let jugador1 = prompt("Jugador 1 Escoge piedra, papel o tijeras");
let jugador2 = prompt("Jugador 2 Escoge piedra, papel o tijeras");
if(jugador1 === "piedra" && jugador2 === "piedra" || jugador1 === "papel" && jugador2 === "papel" || jugador1 === "tijeras" && jugador2 === "tijeras"){
    alert("Empate")
}else if (jugador1 == jugador2) {
  alert("Empate");
} else if (jugador1 === "piedra" && jugador2 === "tijeras") {
  alert("Gana Jugador 1");
} else if (jugador1 === "papel" && jugador2 === "tijeras") {
  alert("Gana Jugador 2");
} else if (jugador1 === "tijeras" && jugador2 === "piedra") {
  alert("Gana Jugador 2");
} else if (jugador1 === "tijeras" && jugador2 === "papel") {
  alert("Gana Jugador 1");
} else if (jugador1 === "papel" && jugador2 === "piedra") {
  alert("Gana Jugador 1");
} else if(jugador1 === "piedra" && jugador2 === "papel"){
    alert("Gana jugador 2")
} else{
    alert("Alguien intento hacer trampa")
}

// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números. && ||

let num1 = Number(prompt("Escribe el primer numero"))
let num2 = Number(prompt("Escribe el segundo numero"))
let num3 = Number(prompt("Escribe el tercer numero"))

if(num1 > num2 && num1 > num3){
    alert (`De los numeros ${num1},${num2} y ${num3} el mayor es ${num1}`)
}else if(num2 > num1 && num2 > num3){
    alert(`De los numeros ${num1},${num2} y ${num3} el mayor es ${num2}`)
}else if(num3 > num1 && num3 > num2){
    alert(`De los numeros ${num1},${num2} y ${num3} el mayor es ${num3}`)
}else{
    alert("Existen numeros iguales, no se puede determinar el mayor de los 3")
}