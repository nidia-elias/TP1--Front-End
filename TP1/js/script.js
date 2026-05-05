//mensaje personalizado
function mostrarMensaje() {

    const nombre = document.getElementById("nombre").innerText;

    alert("Gracias por visitar la tarjeta de " + nombre);
}

// Seleccionamos el elemento del título en el header
const headerTitle = document.querySelector('header h1');

if (headerTitle) {

    const hora = new Date().getHours();
    let saludo;

    if (hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora < 20) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    // Cambiamos el texto dinámicamente
    headerTitle.innerText = `${saludo} Somos PawCode`;

}

//cambiar de tema
function cambiarTema() {

    const tarjeta = document.getElementById("tarjeta");

    tarjeta.classList.toggle("dark-mode");

}

//footer dinámico automático

const footer = document.getElementById("footer-text");

if (footer) {

    const mensajes = [

        "© 2026 PawCode | Proyecto Web Grupal",

        "Gracias por visitar nuestro sitio",

        "PawCode desarrollando creatividad y código",

        "HTML, CSS y JavaScript en acción",

        "PawCode Team"

    ];

    let indice = 0;

    setInterval(() => {

        indice++;

        if (indice >= mensajes.length) {
            indice = 0;
        }

        footer.innerText = mensajes[indice];

    }, 3000);

}