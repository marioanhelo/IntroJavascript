let miEdad = parseInt(prompt("Cual es tu edad"))
if(miEdad < 4){
    alert("Muy joven")
}else if(miEdad >= 4 && miEdad <= 99){
    alert("Diviertete")
}else{
    alert("Lo siento, pero para el domino no hay limite")
}

let edad = parseInt(prompt("Cual es tu edad"))
edad <4 ? alert("Muy joven") : edad<=99 ? alert("Diviertete") : alert("Lo siento, pero para el domino no hay limite");