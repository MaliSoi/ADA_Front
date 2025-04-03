//seleccionamos el botón por su ID

let boton = document.getElementById("botonColor");
let body = document.body;
let colores = ["color1", "color2", "color3", "color4", "color5"];
let indice = 0;

boton.addEventListener("click", function() {
body.classList.remove(...colores);//elimina cualquier color actual
body.classList.add(colores[indice])//Agrega el nuevo color
indice = (indice + 1) % colores.length;//Avanza al siguiente color
});
