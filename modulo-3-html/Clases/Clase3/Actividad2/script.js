/*document.getElementById("miEnlace").addEventListener("click",function (event) {
    event.preventDefault(); //evita la redirección
    alert("Redirección bloqueada. No irás a google.")
});*/

document.getElementById("miEnlace").addEventListener("click", function(event){
    let confirmar = confirm ("¿Seguro que quieres ir a Google?");
    if(!confirmar){
        event.preventDefault();//Bloquea si el usuario cancela
    }
});