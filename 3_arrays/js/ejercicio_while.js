let saludo=prompt("Escribe un saludo");

while(saludo==="hola"){
    saludo = prompt("Hola ?");
}
console.log("Te voy acusar")

//////////
/* Practica 2: Contador de cervezas
Son administradores de un bar y por seguridad de sus clientes cuidan la cantidad de tragos que toman, por lo que solo tienen permitido vender un maximo de 7 por cliente.
Hagan un programa en el que le pregunten al cliente si quiere otro trago, si si quiere otro trago incrementen la su contador de tragos, pero si quiere otro y ya tomo 7 esta noche, mandenlo a casa
 */
let trago = 1
while(trago<=7){
  let pregunta = prompt("Quieres otro?")
  if(trago>7){
    alert("Deberia irse a su casa")
  }else{
    if(pregunta ==="si" ){
        alert(`Ahi te va tu trago numero ${trago}`)
       trago++
   }else{
       alert("Que le vaya bien!")
       break;
   }
  }
}
console.log("Ya vayase a su casa")

/* Practica 3: Alta de alumnos
Inicien un arreglo vacio de alumnos
Con un ciclo while pregunten si quieren dar de alta un nuevo alumnos, si si, agreguen  un nuevo objeto alumno al arreglo, pidiendo su nombre y apellido por prompt, si no, terminen el ciclo e impriman la lista de alumnos
Si  quieren dar el extra mille, entonces al salir del ciclo con un ciclo for, iteren sobre todos los elementos del arreglo e impriman nombre y aprellido concatenado con template string*/
let alumnos =[]
let altaAlumno = prompt("Deseas agregar un alumno?")
while(altaAlumno ==="si"){
    alumnos.push({
        nombre: prompt("Escribe el nombre"),
        apellido: prompt("Escribe el apellido")
      });
    altaAlumno = prompt("Deseas agregar otro alumno?")
}
for(i=0; i<alumnos.length; i++){
    console.log(`Nombre Alumno ${i+1}: ${alumnos[i].nombre} ${alumnos[i].apellido}`)
}