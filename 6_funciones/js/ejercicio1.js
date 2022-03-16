// 1. Crear una función que nos muestre en consola los días de la semana.

// 2. Crear una función que nos muestre un numero A, un numero B y la suma de A y B

// 3. Crear una función que nos muestre la longitud de un arreglo que tú crearás

function mostrarDiasSemana(){
    let dias =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo']
    for(i=0; i<dias.length; i++){
        console.log(dias[i])
    }
}

function sumar(){
 let A = 10
 let B =20
 console.log(A+B)
}

function calcularLongitudArreglo(){
    let arreglo = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    console.log(arreglo.length)

}

diasSemana();
suma();
longitudArreglo();