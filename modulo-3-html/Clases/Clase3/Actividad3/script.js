

//seleccionamos todos los elemntos <li>
/*let items = document.querySelectorAll("li");

//Función para cambiar el color a pasar el mouse

(items.forEach (item => {
    item.addEventListener ("mouseover", function(){
        this.classList.add("resaltado");//agrega la clase al pasar el mouse
    });

    item.addEventListener("mouseout", function (){
        this.classList.remove ("resaltado");//quita la clase al salir el mouse
    });
});*/


const colores = ["rojo", "azul", "verde", "amarillo", "naranja"];

let items = document.querySelectorAll("li");

items.forEach ((items, index) => {
    let colorClase = colores [ index % colores.length]; //asigna un color según indice
      
        items.addEventListener ("mouseover", function(){
        this.classList.add(colorClase);//agrega la clase correspondiente
    });

    items.addEventListener("mouseout",function(){
        this.classList.remove(colorClase);//quita la clase correspondiente
         });
});