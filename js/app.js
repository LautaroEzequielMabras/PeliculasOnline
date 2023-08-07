const Carreras = () => {
    let nombre = prompt("Bienvenido a la aventura! ¿Cómo es tu nombre?");
    let opcion1 = prompt("¿Qué quieres hacer? ¿Aventurarte a la cueva o no?");
    opcion1 = opcion1.toLowerCase(); // Debes asignar el resultado de toLowerCase() nuevamente a la variable opcion1
    if (opcion1 === "si") {
        alert(`Bienvenido a la cueva ${nombre}`);
        let opcion2;
        do {
            opcion2 = prompt("¡Has encontrado un tesoro! Pero tiene contraseña... Deberás responder correctamente el siguiente acertijo: Tengo ciudades pero no tengo casas, tengo bosques pero no tengo árboles, y tengo ríos pero no tengo agua. ¿Qué soy?");
            opcion2 = opcion2.toLowerCase();
            if (opcion2 !== "mapa" && opcion2 !== "un mapa") {
                alert("Respuesta incorrecta, vuelve a intentarlo");
            }
        } while (opcion2 !== "mapa" && opcion2 !== "un mapa"); 
        alert("Respuesta correcta. ¡Has ganado 1000 monedas de plata y has salido victorioso!");
    }
    else if (opcion1 === "no") {
        alert("No te has aventurado a la cueva, vuelve cuando quieras");
    }
    else {
        alert("Opción no válida");
    }
}

Carreras();
