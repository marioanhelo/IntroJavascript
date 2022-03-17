//1. Juan y José son hermanos, Juan tiene $200 y José tiene $300, además cada uno recibió $500 de su abuelita, ¿Cuánto dinero tienen entre los 2?

function sumar() {
  let dineroJose = 300 + abuela;
  let dineroJuan = 200 + abuela;
  let abuela = 500;
  let suma = dineroJose + dineroJuan;
  console.log(`Entre Juan y Jose tienen ${suma}`);
}
/*2. Pepe y Toño tienen una compañia llamada “Memify”, una compañía especializada
en hacer memes generados por inteligencia artificial, Google desea adquirirlos y les
ofrece comprarlos en $1,000,000 de dólares, cada uno tiene el 50% de la compañía,
¿Cuánto le corresponde a cada uno si tienen que pagar 16% de impuestos de su
respectiva parte?*/

function Memify() {
  let Google = 1000000;
  let Pepe = Google * 0.5 * 0.84;
  let Tono = Google * 0.5 * 0.84;

  console.log(`A Pepe le corresponde ${Pepe} y a Toño le corresponde ${Tono}`);
}

/*3. Diego va a comprar una nueva Macbook Pro cuyo precio es $30,000.00 sin iva
incluido, ¿cuánto dinero costará su Mac si incluye IVA tomando en cuenta que el IVA
es de 16%?*/

function calcularIVA() {
  let precio = 30000 * 1.16;
  console.log(`El precio con IVA es de ${precio}`);
}
/*4. Paco compró un auto y quiere saber la distancia kilómetros puede recorrer con el
tanque lleno, el instructivo del auto dice que con el tanque lleno puede recorrer hasta
200 millas, ¿cuántos kilómetros puede recorrer el auto de Paco?*/

function convertirMillasKM() {
  let km = 200 * 1.60934;
  console.log(`El auto recorre ${km} kilometros con el tanque lleno`);
}

/*5. Paco, Diego, Joel y Anuar fueron a comer al ta’corte todos consumieron lo mismo, la
cuenta fue de 650 y deciden dividir la cuenta, ¿Cuánto deberá pagar cada uno?
Tomando en cuenta que van a dejar un 10% de propina por su consumo. */

function calcularCuenta() {
  let total = 650;
  let totalconpropina = 650 * 1.1;
  let division = totalconpropina / 3;
  console.log(`Cada uno debe pagar ${division}`);
}
/*Paco, Diego, Joel y Anuar volvieron al ta’corte e invitaron a su amiga Tania, el
consumo por persona fue de 150, Ellos quieren saber cuánto ¿Cuánto deberá pagar
cada uno? Tomando en cuenta que van a dejar un 10% de propina por su consumo
sin contar a Tania ya que la invitaron. */

function calcularCuenta2() {
  let total = 150 * 4;
  let totalconpropina = total * 1.1;
  let division = totalconpropina / 3;
  console.log(`Cada uno debe pagar ${division}`);
}
/*7. Joel ordenó un PS4 para su cumpleaños y está ansioso porque llegue, esta tan
desesperado que hace un tuit por minuto en espera su consola de videojuegos,
suponiendo que Joel tiene que esperar X cantidad de horas, ¿cuántos tuits hará
Joel? */
calcularTuits(2);
function calcularTuits(x) {
  let tuits = x * 60;
  console.log(`Escribirá ${tuits} tuits`);
}

/*8. Joel quiere que hacer varios viajes alrededor del mundo y sabe que en ciertos viajes
no tendrá electricidad pero no quiere quedarse sin pila hasta llegar a su destino, así
que decide comprar power banks para poder suplir de energía a su smartphone. La
batería de su teléfono dura 2 horas, al apagarse Joel puede conectar power bank y
tiene que esperar 10 minutos a que se cargue de nuevo su teléfono. ¿Cuántas
power banks necesita comprar suponiendo que su viaje dura N cantidad de horas? */
calcularPwrBnks(5);
function calcularPwrBnks(n) {
  let bateria = 2;
  let total = Math.round(n / 2);
  console.log(`Debe comprar ${total} power banks`);
}

/*9. Daniel es un doctor que va a poner varios consultorios en México, Guadalajara y
Monterrey. La renta en México es de $30,000, en Guadalajara $25,000 y en
Monterrey $40,000, Si cada consulta dura 20 minutos y el precio por consulta es de
$350, ¿Cuantas consultas necesita hacer por consultorio al mes para duplicar la
inversión (suponiendo cada mes tiene 30 días)? ¿Es posible que alcance la meta
suponiendo que su jornada laboral es de 8 horas? */

function calcularInversion() {
  let MTY = (40000 * 2) / 350;
  let GDL = (25000 * 2) / 350;
  let CDMX = (30000 * 2) / 350;
  console.log(
    `Consultorio MTY: ${MTY}, consultorio CDMX: ${CDMX}, consultorio GDL: ${GDL}`
  );
}

/*10. Anuar quiere poner un negocio de videojuegos, para ello necesita comprar varios
Nintendo Switch como primera consola. El tiene 3 posibles proveedores, un
americano, un mexicano y uno español todos. Anuar tiene $50,000 pesos en el
banco. El proveedor americano le cobra $1,000 dólares por unidad y el costo de
aduanas es de 10% de su compra y envío gratuito, el proveedor mexicano le cobra
$13,000 pesos por unidad y envío gratuito, El proveedor español $990 euros porunidad y el costo de aduanas es de 9% de su compra y envio gratuito, ¿Que
proveedor le conviene elegir a Anuar? */
negocio(5);
function negocio(ns) {
  let banco = 50000;
  let prUS = 1000 * ns * 1.1 * 20.5;
  let prES = 990 * ns * 1.09 * 25;
  let prMX = 13000 * ns;
  if (prUS < prES && prUS < prMX) {
    console.log("El proveedor americano es mejor eleccion");
  } else if (prES < prUS && prES < prMX) {
    console.log("El proveedor español es mejor eleccion");
  } else if (prMX < prUS && prMX < prES) {
    console.log("El proveedor mexicano es mejor eleccion");
  }
}

///CONDICIONALES

/*1. Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
números cool a los que son divisibles entre 3 y 5, el quiere crear un programa en el
cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo? */
numeroCool(3);
function numeroCool(num) {
  if (num % 3 == 0 || num % 5 == 0) {
    console.log(`El numero ${num} es cool`);
  } else {
    console.log(`El numero ${num} no es cool`);
  }
}

/*2. Miguel está planeando una fiesta, el esta planeando comprar 40 pizzas(8 rebanadas
por pizza) y 20 refrescos de 4 litros para 100 personas, cada persona come
alrededor de 3 rebanadas de pizza y medio litro de refresco, ¿Hay refresco
suficiente? ¿Hay pizza suficiente */

function calcularComida() {
  let rebanadas = 8 * 40;
  let pizzaNecesaria = 3 * 100;
  let refresco = 0.5 * 100;
  let totalrefresco = 4;
  rebanadas >= pizzaNecesaria
    ? console.log(`Si hay suficiente pizza`)
    : console.log(`Falta pizza`);
  totalrefresco >= refresco
    ? console.log(`Si hay suficiente refresco`)
    : console.log(`Falta refresco`);
}

/*3. Arnoldo sigue en su búsqueda de números, ahora busca números raros. Los
números raros son aquellos que son divisibles entre 5 y entre 3, pero no entre 2. El
quiere crear un programa en el cual ingrese un número y le diga si es raro o no. */
numeroRaro(15);
function numeroRaro(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`El numero ${num} es raro`);
  } else if (num % 2 == 0) {
    console.log(`El numero ${num} no es raro`);
  }
}
/*4. Joel quiere comprar un Nintendo Switch, el tiene ahorrado $950 dólares y el
Nintendo cuesta $10000.00 pesos, tomando en cuenta el precio del dólar es de $18
pesos, ¿A joel le alcanza para comprarlo? */

function NintendoSwitch() {
  let ahorro = 950;
  let precioUSD = 18;
  let ahorroUSDtoMX = ahorro * precioUSD;
  let costoNS = 10000;
  ahorroUSDtoMX >= costoNS
    ? console.log(`Si le alcanza para comprarlo`)
    : console.log(`No le alcanza para comprarlo`);
}

/*5. Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
que cuando un usuario ingrese un código este despliegue un mensaje. Para el
código happy el quiere desplegar el mensaje “cool bro, the life is short” y para el
código sad él quiere, desplegar el mensaje “go for tacos bro, tacos = smile”*/
verificarCodigo("happy");
function verificarCodigo(codigo) {
  if (codigo === "happy") {
    console.log("cool bro, the life is short");
  } else if (codigo === "sad") {
    console.log("go for tacos bro, tacos = smile");
  } else {
    console.log("código inválido");
  }
}

/*6. Paco está haciendo un videojuego y necesita hacer un programa que determine la
jerarquía de usuario de acuerdo a su nivel, las jerarquías son paladin : nivel 0 -10,
caballero dorado : nivel 11 - 30, dios destructor: 31 - 50. */
verificarJerarquia(21);
function verificarJerarquia(nivel) {
  nivel >= 0 && nivel <= 10
    ? console.log("Nivel Paladin")
    : nivel >= 11 && nivel <= 30
    ? console.log("Nivel caballero dorado")
    : nivel >= 31 && nivel <= 50
    ? console.log("Dios Destructor")
    : alert("Nivel no valido");
}

//CICLOS

/*1. Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
escribir en el pizarrón todos los números del 1 al 100, ¿puedes ayudarle a Paco a
hacer un algoritmo que haga esto por el? */

function escribirNumeros() {
  for (i = 1; i <= 100; i++) {
    console.log(i);
  }
}


/*2. Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,
¿podrías ayudarle a crear un algoritmo que haga eso por el? */

function calcularPromedio(){
    let calificaciones=[10,9,9,10,9]
    let suma = 0;
    let promedio = 0
    for (i = 0; i <calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    promedio = suma/calificaciones.length
    console.log(`El promedio es ${promedio}`)
}

/*3. Joel se da cuenta que su algoritmo quedo genial y quiere que más gente lo utilice, el
problema es que algunos de sus compañeros no llevan las mismas materias que él,
¿podrías ayudarlo a modificar su algoritmo para solucionar ese inconveniente? */
calcPromedio([10,10,10,9,9,9,8])

function calcPromedio(cals){
let suma = 0
let promedio = 0
for (i = 0; i <cals.length; i++) {
    suma += cals[i];
}
promedio = suma/cals.length
console.log(`El promedio de las ${cals.length} materias es ${promedio}`)


}


/*4. Escribe un programa que calcule el factorial de una entrada N */

calcFactorial(5);
function calcFactorial(N) {
  var factorial = 1;
  for (i = 1; i <= N; i++) {
    factorial = factorial * i;
  }
  console.log(`El factorial de ${N} es ${factorial}`);
}


function escribirNumeros2(){
    for(i=1; i<=100; i++){
        if (i % 2 == 0) {
            console.log(i);
          }
    }
}


/*5. A Diego le encargaron de tarea investigar la cantidad de números divisibles entre 3 y
5 en una serie numérica que va de 1 a N, ¿Puedes apoyarlo? */

serienumeros =[1,3,5,7,9,12,15]
calcNumerosDivisibles(serienumeros)
function calcNumerosDivisibles(serie) {
numerosdivisibles=[]
for (i = 0; i <serie.length; i++) {
    if (serie[i] % 3 == 0 && serie[i] % 5 == 0) {
        numerosdivisibles.push(serie[i])
      }
}
console.log(`De la serie ingresada, un total de ${numerosdivisibles.length} son divisibles entre 3 y 5, ${numerosdivisibles}`)

}

/*6. Anuar está haciendo un estudio estadístico sobre la probabilidad de que en N
cantidad de lanzamientos de un dado el número sea par, ¿Puedes ayudarlo? */

function calcProbabilidad(N){



}

/*7. Basado en su estudio anterior Anuar quiere hacer un estudio similar, pero ahora
usando 2 dados, ¿podrías ayudarlo a modificar su algoritmo para lograr su objetivo?
 */



/*8. Joel es un maestro pokemon que va viajando por chapalita, en su camino se
encuentra a kyogre un pokemon legendario, kyogre es un pokemon tipo agua y Joel
tiene a un pikachu que es de tipo eléctrico, en el primer ataque uso un ataque para
paralizar a kyogre así que no puede atacar. Kyogre tiene 100 puntos de vida, en
cada ataque de pikachu logra hacer un daño entre 2 a 5 puntos, para lograr
capturarlo kyogre debe tener menos de 5 puntos y más de 0. ¿Podrías hacer un
algoritmo que haga una simulación de la batalla y nos ayude a capturarlo? */

function capturarPokemon(){
 let Kyogre = 100
 for (i = 0; i <serie.length; i++) {

}
}


// ARREGLOS

/*1. Joel ya recibió sus calificaciones 10, 8, 9, 10, 7 , 10, 9. ¿podrías sacar su promedio
usando menos de 5 variables?*/
calcularPromedio2([10,8,9,10,7,10,9])
function calcularPromedio2(calificaciones){
suma = 0
promedio = 0
for (i = 0; i <calificaciones.length; i++) {
    suma += calificaciones[i]
}
promedio = suma / calificaciones.length
console.log(`El promedio es ${promedio}` )
}


/* 2. Antonio es el encargado de hacer la rifa de la compañía, cada empleado participa
usando su clave de empleado y necesita determinar a un ganador. ¿Puedes hacer
un programa que le ayude a elegir al ganador de la rifa?*/
let clavesEmpleados = ["HEDM","ROGM","CLS","LTZ","MERG","SMHR","MDHR","MAHZ"]
ganadorRifa(clavesEmpleados)
function ganadorRifa(claves){
    ganador = claves[Math.floor(Math.random() * claves.length)];
 console.log(`El ganador es ${ganador}`)
}


/*3. Paco esta haciendo un algoritmo de cifrado, el recibe una serie de números los
cuales el debe alterar para ocultar el verdadero mensaje, el 2 se debe cambiar por
un 5 y viceversa, el 8 se debe cambiar por un 3 y viceversa, ¿podrías ayudarle
haciendo un programa que haga esto y al final escribe la serie númerica alterada?*/
function codificar(serie){
   let codificado = []
    for (i = 0; i <serie.length; i++) {
        suma += calificaciones[i]
    }

}

/*4. Joel tiene que leer bastante para su exámen de certificación, en total tiene que leer
N libros, cada uno con un número diferente de páginas, en promedio Joel tarda 2
minutos por página, ¿Cuánto tiempo tardará Joel en leer cada libro?*/


/*5. Joel se da cuenta que no es el único con ese problema y quiere hacer un algoritmo
similar al anterior para que lo puedan utilizar más personas, ¿Que necesitaría
cambiar?*/



/*6. Orlando va a abrir una tienda de ropa, para llenarla va a comprar N cantidad de
artículos y cada articulo tiene cierto porcentaje de ganancia. ¿Cuánto ganará
Orlando por cada artículo? */