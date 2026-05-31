document.addEventListener("DOMContentLoaded", function() {
            // === LOGICA DE FILTROS DE PROYECTOS ===
            const filterButtons = document.querySelectorAll(".filter-btn");
            const projectItems = document.querySelectorAll(".fade-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", function() {
                    filterButtons.forEach(btn => {
                        btn.classList.remove("btn-primary", "active");
                        btn.classList.add("text-muted");
                    });
                    this.classList.add("btn-primary", "active");
                    this.classList.remove("text-muted");

                    const targetFilter = this.getAttribute("data-filter");

                    projectItems.forEach(item => {
                        const itemCategory = item.getAttribute("data-category");

                        if (targetFilter === "all" || itemCategory === targetFilter) {
                            item.style.display = "block";
                            setTimeout(() => {
                                item.style.opacity = "1";
                                item.style.transform = "scale(1)";
                            }, 50);
                        } else {
                            item.style.opacity = "0";
                            item.style.transform = "scale(0.9)";
                            setTimeout(() => {
                                item.style.display = "none";
                            }, 300);
                        }
                    });
                });
            });

            // === LÓGICA DEL MODO OSCURO / CLARO ===
            const themeToggle = document.getElementById("themeToggle");
            const themeIcon = document.getElementById("themeIcon");
            const htmlElement = document.documentElement;

            // 1. Revisar si el usuario ya tenía un modo guardado antes
            const savedTheme = localStorage.getItem("theme") || "light";
            htmlElement.setAttribute("data-bs-theme", savedTheme);
            updateIcon(savedTheme);

            // 2. Escuchar el clic en el botón flotante
            themeToggle.addEventListener("click", function() {
                const currentTheme = htmlElement.getAttribute("data-bs-theme");
                const newTheme = currentTheme === "dark" ? "light" : "dark";
                
                // Aplicar el nuevo tema a Bootstrap 5
                htmlElement.setAttribute("data-bs-theme", newTheme);
                // Guardar la elección para que no se borre al recargar
                localStorage.setItem("theme", newTheme);
                // Cambiar el icono del botón
                updateIcon(newTheme);
            });

            // Función para cambiar el icono de luna a sol
            function updateIcon(theme) {
                if (theme === "dark") {
                    themeIcon.className = "bi bi-sun-fill fs-5";
                } else {
                    themeIcon.className = "bi bi-moon-fill fs-5";
                }
            }
        });