if (window.location.pathname.includes('index.html')) {
    document.addEventListener("DOMContentLoaded", function () {
        const cargarMas = (elementoBoton, contenedorCajas) => {
            const botonCargar = document.querySelector(elementoBoton);
            const cajas = Array.from(document.querySelectorAll(contenedorCajas));
            const cajasPorMostrar = cajas.slice(0, -1);

            cajasPorMostrar.forEach(caja => {
                caja.style.display = 'inline-block';
            });

            if (cajasPorMostrar.length > 1) {
                botonCargar.style.display = 'none';
            }
        }

        document.getElementById('load-more-1').addEventListener("click", () => {
            cargarMas('#load-more-1', '.box-container-1 .box-1');
        });

        document.getElementById('load-more-2').addEventListener("click", () => {
            cargarMas('#load-more-2', '.box-container-2 .box-2');
        });

        document.getElementById('load-more-3').addEventListener("click", () => {
            cargarMas('#load-more-3', '.box-container-3 .box-3');
        });

        document.getElementById('load-more-4').addEventListener("click", () => {
            cargarMas('#load-more-4', '.box-container-4 .box-4');
        });

        document.getElementById('load-more-5').addEventListener("click", () => {
            cargarMas('#load-more-5', '.box-container-5 .box-5');
        });
    });
}

if (window.location.pathname.includes('peliculas.html')) {
    fetch('../js/peliculas.json')
        .then((response) => response.json())
        .then((peliculas) => {
            console.log("todo ok");
            function calcularPromedio(puntajes) {
                const sum = puntajes.reduce((actual, antes) => actual + antes, 0);
                const promedio = Math.ceil(sum / puntajes.length);
                return promedio;
            }

            function mostrarPeliculas() {
                const peliculasContainer = document.getElementById('mejores-peliculas');
                peliculas.forEach((pelicula) => {
                    const peliculaElement = document.createElement('div');
                    peliculaElement.classList.add('pelicula');
                    peliculaElement.innerHTML = `
            <img src="../img/${pelicula.foto}.jpg" class="pelicula-imagen">
            <h3 class="pelicula-titulo">${pelicula.id}</h3>
            <form>
                <label for="${pelicula.nombre}">
                    <input type="number" id="${pelicula.nombre}" min="1" max="10" step="1" required>
                    <button type="button" class="agregar-puntuacion">Agregar Puntuación</button>
                </label>
            </form>
            <div class="pelicula-puntaje">
                Puntaje Promedio: <span class="puntaje">${calcularPromedio(pelicula.puntajes)}</span>
            </div>
        `;

                    peliculasContainer.appendChild(peliculaElement);
                });
            }
            
                mostrarPeliculas();
                const agregarPuntuacionButtons = document.querySelectorAll('.agregar-puntuacion');

                agregarPuntuacionButtons.forEach((agregarPuntuacionButton, index) => {
                    agregarPuntuacionButton.addEventListener('click', () => {
                        const puntuacionInput = document.getElementById(peliculas[index].nombre);

                        const puntuacion = parseFloat(puntuacionInput.value);
                        if (!isNaN(puntuacion) && puntuacion >= 1 && puntuacion <= 10) {
                            peliculas[index].puntajes.push(puntuacion);
                            alert(`Puntuación de ${puntuacion} agregada para ${peliculas[index].nombre}!`);
                            puntuacionInput.value = '';
                            const elementoConId = document.querySelector(`#${peliculas[index].nombre}`);
                            const elementoPelicula = elementoConId.closest('.pelicula');
                            const puntajeElemento = elementoPelicula.querySelector('.puntaje');
                            puntajeElemento.textContent = `${calcularPromedio(peliculas[index].puntajes)}`;
                        } else {
                            alert('Por favor, ingresa una puntuación válida entre 1 y 10.');
                        }
                    });
                });
            
        })
        .catch((error) => {
            console.error('Error al cargar los datos:', error);
        });
}

if (window.location.pathname.includes('juego.html')) {
    let score = 0;
    let tiempos = 30;
    let timerId;

    const puntaje = document.getElementById('puntaje');
    const tiempoDis = document.getElementById('tiempo');
    const cajaJuego = document.getElementById('cajaJuego');
    const mensaje = document.getElementById('mensaje-win');

    function mostrarCajaAleatoria() {
        const maxWidth = window.innerWidth - cajaJuego.clientWidth;
        const maxHeight = window.innerHeight - cajaJuego.clientHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        cajaJuego.style.left = `${randomX}px`;
        cajaJuego.style.top = `${randomY}px`;
        cajaJuego.style.display = 'block';
    }

    function juego() {
        score = 0;
        tiempos = 30;
        puntaje.textContent = score;
        tiempoDis.textContent = `Tiempo restante: ${tiempos}s`;

        timerId = setInterval(() => {
            tiempos--;
            tiempoDis.textContent = `Tiempo restante: ${tiempos}s`;

            if (tiempos === 0) {
                endGame();
            }
        }, 1000);

        mostrarCajaAleatoria();
    }

    function endGame() {
        clearInterval(timerId);
        cajaJuego.style.display = 'none';
        switch (true) {
            case score >= 100:
                mensaje.textContent = 'Felicidades, ganaste una suscripcion gratis a MovieMania';
                break;
            case score >= 50:
                mensaje.textContent = 'Mi perro clickeaba mejor';
                break;
            default:
                mensaje.textContent = 'No te dediques a jugar al counter';
        }
    }

    cajaJuego.addEventListener('click', () => {
        cajaJuego.style.display = 'none';
        mostrarCajaAleatoria();
        score++;
        puntaje.textContent = score;
    });

    juego();
}
