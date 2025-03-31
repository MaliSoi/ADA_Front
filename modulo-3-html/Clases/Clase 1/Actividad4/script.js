let boton = document.getElementById("cambiarColor");

//Agregar un evento de clic al botón
boton.addEventListener("click", function () {
    //seleccionar todos los elementos con la clase "destacado"
    let nombresDestacados = document.querySelectorAll(".destacado");

    //recorrer la lista y alternar la clase "resaltado"
    nombresDestacados.forEach(nombre => {
        nombre.classList.toggle("resaltado");
    });
});