// Selecciona el elemento con la clase "hamburguesa" y el elemento con la clase "navegación"

const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");

// Cuando el DOM esté cargado, ejecuta la función "eventos"

document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

// Función que añade un evento al elemento "menu" para ejecutar la función "abrirMenu" cuando se haga clic

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

// Función que elimina la clase "ocultar" del elemento "navegación" y ejecuta la función "botonCerrar"

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

// Función que crea un elemento "p" y un elemento "div" con la clase "pantalla-completa", y los añade al "body". También agrega la clase "btn-cerrar" al elemento "p" y lo añade al elemento "navegación"y por ultimo lo agrega al div "navegacion"

const botonCerrar = () => {
  //  PARTE 1: Agrega boton de cerrar

  const btnCerrar = document.createElement("p"); //crea el <p>
  btnCerrar.textContent = "X"; //Le agrega de texto "x"
  btnCerrar.classList.add("btn-cerrar"); //Le agrega la clase "btn-cerrar"
  navegacion.appendChild(btnCerrar); // Le agrega el <p > al <div> con la clase "navegacion"

  //  PARTE 2: Cierra el menu

  //  PARTE 3: Crea la capa de cobertura transparente oscura

  const overlay = document.createElement("div"); // Crea un <div>
  if (document.querySelectorAll("pantalla-completa").lenght > 0) return;
  overlay.classList.add("pantalla-completa"); // Le agrega la clase 'pantalla-completa'
  const body = document.querySelector("body"); // Selecciona el <body>
  body.appendChild(overlay); // Le agrega al <body> el <div> con clase pantalla completa
  cerrarMenu(btnCerrar, overlay); // Llama a la funcion cerrarMenu que agrega al div "navegacion" la clase "ocultar"
};

// Función que añade eventos a los elementos "boton" y "overlay" para ocultar el elemento "navegación" y eliminar el elemento "overlay" cuando se haga clic en ellos

const cerrarMenu = (boton, overlay) => {
  //  PARTE 1: borra el menu al hacer click en el boton

  boton.addEventListener("click", () => {
    // Le agrega al parametro boton, un event listener click
    navegacion.classList.add("ocultar"); //Agrega la clase "ocultar al div "navegacion"
    overlay.remove(); //Remueve el div "overlay"
  });

  //  Parte 2: Borra el menu al hacer click en la pantalla

  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
  };
};

// Este código es parte de un menú de navegación que se despliega al hacer clic en un elemento con la clase "hamburguesa" y se cierra al hacer clic en un botón con la clase "btn-cerrar" o en un elemento con la clase "pantalla-completa".

// A continuación se describen las líneas del código:

// La primera línea guarda una referencia al elemento HTML con la clase "hamburguesa" en la variable "menu".
// La segunda línea guarda una referencia al elemento HTML con la clase "navegacion" en la variable "navegacion".
// La tercera línea establece un evento que se ejecutará cuando el DOM (árbol de elementos del documento HTML) haya sido cargado completamente. El evento llama a la función "eventos".
// La cuarta línea define la función "eventos", que establece un evento "click" en el elemento "menu" y llama a la función "abrirMenu" cuando se haga clic en el elemento.
// La quinta línea define la función "abrirMenu", que elimina la clase "ocultar" del elemento "navegacion" (lo que lo hace visible) y llama a la función "botonCerrar".
// La sexta línea define la función "botonCerrar", que crea un elemento "p" y un elemento "div", le asigna a cada uno de ellos una clase respectivamente y los añade al documento HTML. Si ya existe un elemento "div" con la clase "pantalla-completa", la función termina.
// La séptima línea añade el elemento "p" (con la clase "btn-cerrar") como hijo del elemento "navegacion".
// La octava línea llama a la función "cerrarMenu" y le pasa como argumentos el elemento "p" y el elemento "div".
// La novena línea define la función "cerrarMenu", que establece un evento "click" en el elemento "p" (el botón de cierre) y elimina el elemento "div" (la pantalla completa) y agrega la clase "ocultar" al elemento "navegación" (para ocultarlo) cuando se hace clic en el botón. También establece un evento "onclick" en el elemento "div" (la pantalla completa) que tiene el mismo efecto cuando se hace clic en él.
