// Función para agregar un nuevo párrafo

function agregarParrafo() {
    // Crear un nuevo elemento <p>
    let nuevoParrafo = document.createElement('p');
     // Agregar texto al párrafo
    nuevoParrafo.textContent= 'Este es un párrafo agregado';
     // Obtener el div donde se agregarán los párrafos
     let contenedor = document.getElementById('contenedor');
    // Agregar el nuevo párrafo al contenedor
     contenedor.appendChild(nuevoParrafo);
}

// Función para eliminar el ultimo párrafo agregado

function eliminarParrafo() {
    // Obtener el div donde están los párrafos
    let contenedor = document.getElementById('contenedor');
    // Verificar si hay párrafos dentro del contenedor
    if (contenedor.lastElementChild) {
        //Eliminar el último párrafo
    contenedor.removeChild(contenedor.lastElementChild);
    }
}

