
// ==========================================
// SERVICIOS GENERALES L&A
// Funcionalidades de la página web
// ==========================================


// 1. MENÚ DE NAVEGACIÓN PARA CELULARES

const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");

        const menuAbierto = menu.classList.contains("activo");

        botonMenu.setAttribute("aria-expanded", menuAbierto);

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent = menuAbierto ? "✕" : "☰";

    });

    // Cerrar el menú al seleccionar una sección

    const enlacesMenu = menu.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menu.classList.remove("activo");

            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
            botonMenu.textContent = "☰";

        });

    });

}


// 2. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA

const elementoAnio = document.getElementById("anio");

if (elementoAnio) {
    elementoAnio.textContent = new Date().getFullYear();
}


// 3. BOTÓN DE WHATSAPP

const botonWhatsApp = document.getElementById("boton-whatsapp");

// IMPORTANTE:
// Reemplazaremos este número por el WhatsApp real del taller.
// Formato: código de país + número, sin espacios ni símbolos.

const numeroWhatsApp = "519XXXXXXXX";

if (botonWhatsApp) {

    botonWhatsApp.addEventListener("click", function (evento) {

        evento.preventDefault();

        if (numeroWhatsApp === "519XXXXXXXX") {

            alert("Próximamente habilitaremos nuestro WhatsApp.");

            return;

        }

        const mensaje = encodeURIComponent(
            "Hola, quisiera información sobre los servicios de Servicios Generales L&A."
        );

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");

    });

}
