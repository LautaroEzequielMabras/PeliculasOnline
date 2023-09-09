const cargarMas = (elementoBoton, contenedorCajas) => {
    const botonCargar = document.querySelector(elementoBoton);
    const cajas = Array.from(document.querySelectorAll(contenedorCajas));
    const cajasPorMostrar = cajas.slice(0, -1);
    cajasPorMostrar.forEach(caja => {
        caja.style.display = 'inline-block';
    });
    if (cajasPorMostrar[1].style.display === 'inline-block') {
        botonCargar.style.display = 'none';
    }
}
document.getElementById('load-more-1').addEventListener("click", () => {
    cargarMas('#load-more-1', '.box-container-1 .box-1');
})
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