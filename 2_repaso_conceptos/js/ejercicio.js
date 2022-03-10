// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

let nombreMascota1 = "Pedrito"
let nombreMascota2 = "Rufo"
let nombreMascota3 = "Chancla"

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

console.log(`Mis mascotas son ${nombreMascota1}, ${nombreMascota2} y ${nombreMascota3}. Les quiero mucho`)

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// "Quiero mucho a mis mascotas mascota1 y mascota2"

var mascotaUsuario1 = prompt("Dime el nombre de tu primera mascota");
var mascotaUsuario2 = prompt("Dime el nombre de tu segunda mascota");

console.log("Quiero mucho a mis mascotas " + mascotaUsuario1 + " y " + mascotaUsuario2);

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

let cadena = "100"

// Muestra el contenido de esta variable en consola

console.log(cadena)

// Muestra el TIPO DE DATO de esta variable en consola

console.log(typeof(cadena))

// Transforma la variable de string a number
let convertirCadena = parseInt(cadena)

console.log(convertirCadena)

// Muestra nuevamente el contenido de esta variable en consola
console.log(typeof(convertirCadena))
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?