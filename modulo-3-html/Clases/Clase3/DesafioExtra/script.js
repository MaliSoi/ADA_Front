const secuenciaCorrecta = [ "a", "b", "c", "d"];//secuencia a seguir 

let posicionActual = 0;

document.addEventListener("keydown", function(event) {
    event.preventDefault(); //evita acciones predeterminadas del navegador

let teclaPresionada = event.key.toLowerCase();//convertimos a minúscula por cualquier confusión o error
if (teclaPresionada === secuenciaCorrecta[posicionActual]){
    posicionActual++;//avanza en la secuencia
    if(posicionActual===secuenciaCorrecta.length){
        document.getElementById("resultado").textContent="¡Ganaste! 🎉";
        posicionActual = 0; //reinicia el juego

    }
}else{
    posicionActual=0;//reinicia si se equivoca
    document.getElementById ("resultado").textContent="Uuu fallaste pero, ¡vuelve a intentar!"
    setTimeout(() => {document.getElementById("resultado").textContent = "";},2000)
        
};

});
