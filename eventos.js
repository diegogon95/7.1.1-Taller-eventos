const div = document.getElementById("container");

div.addEventListener("click", function(event){
    alert("Hola!, Soy el div");
    event.stopPropagation();
});

const boton = document.getElementById("button");

boton.addEventListener("click", function(event){
    alert("Hola!");
    event.stopPropagation();
});
