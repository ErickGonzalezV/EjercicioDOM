let btnMostrar = document.getElementById("btnMostrar");
let encabezado2 = document.getElementById("encabezado2");
let encabezado1 = document.getElementById("encabezado1");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByTagName("list-group-item")
let otroElemento = document.querySelector("ul>li"); //Primero
let otrosElemento = document.querySelectorAll("ul>li"); 

let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");



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
    // listas.item(0).prepend(element2);
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

});//btnMostrar

// Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina")



}); //load

//Automatizar el codigo
function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}//txtToUpper


//BLUR Y TOUPPER DE RFC Y CURP

// Blur -> Cuando se sale del campo     
txtRFC.addEventListener("blur", txtToUpper); //txtRFC
// Blur -> Cuando se sale del campo
txtCURP.addEventListener("blur", txtToUpper); //txtCURP
//txtTelefono
txtTelefono.addEventListener("blur", function(event){
  event.preventDefault();
  txtTelefono.value = txtTelefono.value.trim().slice(0, 10); //Recorta espacios en blanco y despues cualquier 
                                                            // exceso si ponemos mas de 10 caracteres
})//txtTelefono



   // EJEMPLOS DE INSERT ELEMENT


btnMostrar.addEventListener("click", function (event) {
    event.preventDefault();
    //console.log("botón btnModificar presionado");

    let element = document.createElement("li");
    element.innerText = "Another item"; //<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true)


    // before: Inserta el elemeneto antes de la lista
    // listas.item(0).before(element); 

    // prepend: Inserta el elemento al principio de la lista
    // listas.item(0).prepend(element2);

    // append: Inserta el elemento al final de la lista
    // listas.item(0).append(element);

    // // after: Inserta el elemento despue de la lista
    // listas.item(0).after(element2);

    //afeterbegin Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("afterbegin", element)

    // //beforeend: Inserta el elemento al final de la lsita
    // listas.item(1).insertAdjacentElement("beforeend", element2)

    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`);

    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">
        After End item
        </li>`);

    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">After Begin item</li>`);

    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`);
    });//botonMostrar


    
//blur -> al salir del campo
// txtRFC.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtRFC.value = txtRFC.value.toUpperCase();
// });//txtRFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtRFC

//Esto es mas automatizado

function txtToUpper(event){
    event.target.value=event.target.value.trim().toUpperCase();
}
txtRFC.addEventListener("blur",txtToUpper);
txtCURP.addEventListener("blur",txtToUpper);


txtTel.addEventListener("blur", function(event){
    event.preventDefault();
    txtTel.value = txtTel.value.trim().slice(0,10);
});//txtTel
