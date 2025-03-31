let imagen = document.getElementById("imagen");
let boton = document.getElementById("cambiarImagen");

//Definir las rutas de las imágenes

let imagenOriginal = "images/pina1.png";
let imagenNueva = "images/pina2.jpg";

//Agregar un evento de clic al botón

boton.addEventListener("click", function () {
    //verificar cuál imagen está actualmente y cambiarla
    if (imagen.getAttribute("src") === imagenOriginal) {
        imagen.setAttribute("src", imagenNueva);
    } else {
        imagen.setAttribute("src", imagenOriginal);
    }
    
});