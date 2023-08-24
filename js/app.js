class Pelicula {
    constructor(IMDB, titulo, director, añoDeEstreno, pais, generos, calificacion) {
        this.IMDB = IMDB;
        this.titulo = titulo;
        this.director = director;
        this.añoDeEstreno = añoDeEstreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validacionId(IMDB);
        this.validacionTitulo(titulo);
        this.validacionDirector(director);
        this.validacionAñoDeEstreno(añoDeEstreno);
        this.validacionPais(pais);
        this.validacionGenero(generos);
        this.validacionCalificacion(calificacion);

    }
    validacionId(IMDB) {
        let regex = /^[A-Za-z]{2}[0-9]{7}$/;
        if (!regex.test(IMDB)) {
            throw new Error('El ID de IMDB no cumple con el formato requerido.')
        }
    }
    validacionTitulo(titulo) {
        if (titulo.length === 0) {
            throw new Error('El título no puede estar vacío.');
        }
        if (titulo.length > 100) {
            throw new Error('El título no puede exceder los 100 caracteres.');
        }
    }
    validacionDirector(director) {
        if (director.length === 0) {
            throw new Error('El director no puede estar vacío.');
        }
        if (director.length > 50) {
            throw new Error('El director no puede exceder los 50 caracteres.');
        }
    }
    validacionAñoDeEstreno(añoDeEstreno) {
        if (typeof añoDeEstreno !== "number" || añoDeEstreno.toString().length !== 4) {
            throw new Error('El año de estreno no cumple existe.');
        }
    }
    validacionPais(pais) {
        if (!Array.isArray(pais)) {
            throw new Error('El país debe ser un array.');
        }
    }
    get generosAceptado() {
        return "Los géneros aceptados son: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western";
    }
    validacionGenero(generos) {
        const generosAceptados = [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
            "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir",
            "Game-Show", "History", "Horror", "Musical", "Music", "Mystery",
            "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
            "Talk-Show", "Thriller", "War", "Western"
        ];

        generos.forEach((genero) => {
            let lowerGenero = genero.toLowerCase();
            if (!generosAceptados.some((aceptado) => aceptado.toLowerCase() === lowerGenero)) {
                throw new Error(`El género "${genero}" no es válido. ${this.generosAceptados}`);
            }
        });
    }
    validacionCalificacion(calificacion) {
        let regex = /^([1-9]|10)(\.\d+)?$/;
        if (!regex.test(calificacion)) {
            throw new Error(`La calificacion "${calificacion}" no es válida.`);
        }
    }
    fichaTecnica() {
        return `Datos sobre la película:\nID: ${this.IMDB}\nTítulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.añoDeEstreno}\nPaís de producción: ${this.pais}\nGénero de la película: ${this.generos}\nCalificación: ${this.calificacion}`;
    }

}

const scaryMovie = new Pelicula("tt1234567", "Scary Movie", "Keenen Ivory Wayans", 2000, ["Estados Unidos"], ["Comedy"], 7.9);
console.log(scaryMovie.fichaTecnica());

const eliminarDuplicados = (array) => {
    if (Array.isArray(array)) {
        return [...new Set(array)];
    } else {
        return 'Error: El valor ingresado no es un array válido.';
    }
};

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

const separarParesImpares = (array) => {
    if (Array.isArray(array) && array.every(num => typeof num === 'number')) {
        const pares = array.filter(num => num % 2 === 0);
        const impares = array.filter(num => num % 2 !== 0);
        return { pares, impares };
    } else {
        return 'Error: El valor ingresado no es un array numérico válido.';
    }
};

const fizzBuzz = numero => {
    let resultados = [];
    for (let i = 1; i <= numero; i++) {
        let mensaje = "";
        if (i % 3 === 0) {
            mensaje += "Fizz";
        }
        if (i % 5 === 0) {
            mensaje += "Buzz";
        }
        if (mensaje === "") {
            mensaje = i;
        }
        resultados.push(mensaje);
    }
    return resultados;
};

console.table(fizzBuzz(100));

const contarCaracteres = (texto) => {
    if (typeof texto === 'string') {
        return texto.length;
    } else {
        return 'Error: El valor ingresado no es una cadena de texto.';
    }
};

console.log(contarCaracteres("Hola Mundo"));

const recortarTexto = (texto, longitud) => {
    if (typeof texto === 'string' && typeof longitud === 'number') {
        return texto.slice(0, longitud);
    } else {
        return 'Error: Los parámetros ingresados no son válidos.';
    }
};

console.log(recortarTexto("Hola Mundo", 4));

const esPrimo = (numero) => {
    if (typeof numero === 'number' && numero > 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return 'Error: El valor ingresado no es un número válido.';
    }
};

console.log(esPrimo(7));

const aplicarDescuento = (monto, descuento) => {
    if (typeof monto === 'number' && typeof descuento === 'number' && monto >= 0 && descuento >= 0 && descuento <= 100) {
        const descuentoAplicado = monto * (descuento / 100);
        return monto - descuentoAplicado;
    } else {
        return 'Error: Los parámetros ingresados no son válidos.';
    }
};

const calcularEdad = (fecha) => {
    if (fecha instanceof Date && !isNaN(fecha)) {
        const hoy = new Date();
        const diferencia = hoy.getTime() - fecha.getTime();
        const añosPasados = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
        return `${añosPasados} años`;
    } else {
        return 'Error: El valor ingresado no es una fecha válida.';
    }
};