function mostrarMensaje() {
    alert("¡Gracias por visitar mi tarjeta!");
}

// Seleccionamos el elemento del título en el header
const headerTitle = document.querySelector('header h1');
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
headerTitle.innerText = `${saludo} Bienvenido a nuestro sitio web`;