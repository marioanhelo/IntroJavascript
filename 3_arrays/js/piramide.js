/* let pisos = parseInt(prompt("Cuantos pisos quieres tu piramide?"))*2;
let n = (pisos/2)-1
let asteriscos =[];
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
} */