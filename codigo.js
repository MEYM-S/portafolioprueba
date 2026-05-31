document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos clave del HTML utilizando sus IDs
    const htmlElement = document.documentElement; // Etiqueta <html>
    const themeToggleBtn = document.getElementById('themeToggle'); // Tu botón
    const themeIcon = document.getElementById('themeIcon'); // El icono dentro del botón
    const metaThemeColor = document.querySelector('meta[name="theme-color"]'); // Color de barra del navegador

    // 2. Definimos los colores de la barra del navegador para cada tema
    const themeColors = {
        light: '#f8f9fa',
        dark: '#0b0f19' // El azul oscuro de nuestro nuevo fondo
    };

    // 3. Función interna para aplicar el tema de forma ordenada
    function setTheme(theme) {
        // Cambia el atributo data-bs-theme en el <html> (Esto activa el CSS de Bootstrap y el tuyo)
        htmlElement.setAttribute('data-bs-theme', theme);
        
        // Guarda la elección en la memoria del navegador para que no se pierda al recargar
        localStorage.setItem('theme', theme);
        
        // Cambia el color de la barra del navegador (en celulares se nota mucho)
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', themeColors[theme]);
        }

        // Intercambia los iconos: Sol para el modo oscuro, Luna para el modo claro
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill';
        } else {
            themeIcon.className = 'bi bi-moon-fill';
        }
    }

    // 4. Revisamos la memoria al cargar la página. Si no hay nada guardado, por defecto es 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // 5. Escuchamos el "Click" en tu botón para alternar el tema
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        // Si es dark lo pasa a light, y viceversa
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // =========================================================================
    // LÓGICA DEL FORMULARIO DE CONTACTO (Simulación de envío)
    // =========================================================================
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Muestra la alerta verde de éxito
            if (contactAlert) {
                contactAlert.classList.remove('d-none');
                contactAlert.classList.add('show');
            }
            
            // Limpia los campos del formulario
            contactForm.reset();

            // Oculta la alerta automáticamente después de 5 segundos
            setTimeout(() => {
                if (contactAlert && contactAlert.classList.contains('show')) {
                    contactAlert.classList.remove('show');
                    contactAlert.classList.add('d-none');
                }
            }, 5000);
        });
    }
});
// Esperar a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const contactAlert = document.getElementById("contactAlert");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // 🛑 Evita que la página se recargue al enviar

            // 1. Mostrar la alerta de éxito removiendo la clase 'd-none' y añadiendo 'show'
            contactAlert.classList.remove("d-none");
            contactAlert.classList.add("show");

            // 2. Limpiar todos los campos del formulario
            contactForm.reset();

            // 3. Ocultar la alerta automáticamente después de 5 segundos
            setTimeout(function () {
                contactAlert.classList.remove("show");
                contactAlert.classList.add("d-none");
            }, 5000);
        });
    }
});