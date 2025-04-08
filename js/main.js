let btnMostrar = document.getElementById("btnMostrar");
let encabezado2 = document.getElementById("encabezado2");
let encabezado1 = document.getElementById("encabezado1");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByTagName("list-group-item")

let otroElemento = document.querySelector("ul>li"); //Primero

let otrosElemento = document.querySelectorAll("ul>li"); 
console.log("OtroElemento", otroElemento);
console.log("OtrosElemento", otrosElemento.length);



console.log(listas.length);
console.log(listas[0]);
console.log(listas.item(1));


console.log(elementos.item(2));
let contador=0;
function modifica(){
encabezado1.innerHTML += "<em>Ejercicio DOM</em>";
encabezado2.innerText = ++contador;
} //Modifica

// console.log(encabezado1.innerText);
// console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //Evita que haga lo que hace por defecto.
   let element = document.createElement("li");
   element.innerText="Another item";  // <li>Another item</li>
   element.classList.add("list-group-item");
   
   let element2 = element.cloneNode(true); //Clona el nodo para hacer un segundo elemento

    // Inserta el elemento antes de la lista
    // listas.item(0).before(element);
    // Inserta el elemento al principio de la lista
    // listas.item(0).prepent(element2);
    //Inserta el elemento al final de la lista
    // listas.item(0).append(element);
    // Inserta el elemento despues de la lista
    // listas.item(0).after(element2);
    
    //listas.item(1).insertAdjacentElement("afterbegin", element);
    //listas.item(1).insertAdjacentElement("beforeend", element2);

    listas.item(1).insertAdjacentHTML("beforebegin", 
        `<li class="list-group-item">Before begin item</li>`);
    listas.item(1).insertAdjacentHTML("afterend", 
        `<li class="list-group-item">After end item</li>`);
        listas.item(1).insertAdjacentHTML("afterbegin", 
            `<li class="list-group-item">After begin item</li>`);
        listas.item(1).insertAdjacentHTML("beforeend", 
            `<li class="list-group-item">Before end item</li>`);

});


// console.log("boton btnMostrar presionado");