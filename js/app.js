class Pelicula {
    constructor() {
        this.IMDB = prompt('Ingrese el ID de la película (Debe cumplir lo siguiente: Debe comenzar con exactamente 2 letras (mayúsculas o minúsculas), luego, deben seguir con exactamente 7 dígitos. No se permite ningún otro carácter en la cadena. La longitud total de la cadena debe ser de 9 caracteres (2 letras + 7 dígitos). Por ejemplo "tt1234567")');
        this.titulo = prompt('Ingrese el título:');
        this.director = prompt('Ingrese el director:');
        this.añoDeEstreno = parseInt(prompt('Ingrese el año de estreno:'));
        this.pais = prompt('Ingrese el país de producción (separe los países con comas):').split(',');
        this.generos = prompt('Ingrese los géneros de la película (Géneros aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western):').split(',');
        this.calificacion = parseFloat(prompt('Ingrese la calificación:'));

        while (true) {
            try {
                this.validacionId(this.IMDB);
                this.validacionTitulo(this.titulo);
                this.validacionDirector(this.director);
                this.validacionAñoDeEstreno(this.añoDeEstreno);
                this.validacionPais(this.pais);
                this.validacionGenero(this.generos);
                this.validacionCalificacion(this.calificacion);

                const fichaTecnica = this.fichaTecnica();
                alert(fichaTecnica);
                break;
            } catch (error) {
                alert(error.message);
                this.IMDB = prompt('Ingrese el ID de la película (Debe cumplir lo siguiente: Debe comenzar con exactamente 2 letras (mayúsculas o minúsculas), luego, deben seguir con exactamente 7 dígitos. No se permite ningún otro carácter en la cadena. La longitud total de la cadena debe ser de 9 caracteres (2 letras + 7 dígitos). Por ejemplo "tt1234567")');
                this.titulo = prompt('Ingrese el título:');
                this.director = prompt('Ingrese el director:');
                this.añoDeEstreno = parseInt(prompt('Ingrese el año de estreno:'));
                this.pais = prompt('Ingrese el país de producción (separe los países con comas):').split(',');
                this.generos = prompt('Ingrese los géneros de la película (Géneros aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western):').split(',');
                this.calificacion = parseFloat(prompt('Ingrese la calificación:'));
            }
        }
    }

    validacionId(IMDB) {
        let regex = /^[A-Za-z]{2}[0-9]{7}$/;
        if (!regex.test(IMDB)) {
            throw new Error('El ID de IMDB no cumple con el formato requerido.');
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
        if (isNaN(añoDeEstreno) || añoDeEstreno.toString().length !== 4) {
            throw new Error('El año de estreno no es válido.');
        }
    }

    validacionPais(pais) {
        if (!Array.isArray(pais) || pais.length === 0) {
            throw new Error('Debe ingresar al menos un país.');
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

        for (let genero of generos) {
            let lowerGenero = genero.trim().toLowerCase();
            if (!generosAceptados.some((aceptado) => aceptado.toLowerCase() === lowerGenero)) {
                throw new Error(`El género "${genero}" no es válido. ${this.generosAceptados}`);
            }
        }
    }

    validacionCalificacion(calificacion) {
        if (isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
            throw new Error(`La calificación "${calificacion}" no es válida.`);
        }
    }

    fichaTecnica() {
        return `Datos sobre la película:\nID: ${this.IMDB}\nTítulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.añoDeEstreno}\nPaís de producción: ${this.pais.join(', ')}\nGénero de la película: ${this.generos.join(', ')}\nCalificación: ${this.calificacion}`;
    }
}

const nuevaPelicula = new Pelicula();

const eliminarDuplicados = () => {
    const input = prompt('Ingrese un array de elementos separados por comas:');
    const array = input.split(',').map(item => item.trim());
    if (Array.isArray(array)) {
        const uniqueArray = [...new Set(array)];
        alert(`Array sin duplicados: [${uniqueArray}]`);
    } else {
        alert('Error: El valor ingresado no es un array válido.');
        eliminarDuplicados();
    }
};

const separarParesImpares = () => {
    const input = prompt('Ingrese un array de números separados por comas:');
    const array = input.split(',').map(item => Number(item.trim()));
    if (Array.isArray(array) && array.every(num => typeof num === 'number')) {
        const pares = array.filter(num => num % 2 === 0);
        const impares = array.filter(num => num % 2 !== 0);
        alert(`Pares: [${pares}], Impares: [${impares}]`);
    } else {
        alert('Error: El valor ingresado no es un array numérico válido.');
        separarParesImpares();
    }
};

const fizzBuzz = () => {
    const numero = parseInt(prompt('Ingrese un número:'));
    if (!isNaN(numero)) {
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
        console.table(resultados);
    } else {
        alert('Error: El valor ingresado no es un número válido.');
        fizzBuzz();
    }
};

const contarCaracteres = () => {
    const texto = prompt('Ingrese un texto:');
    if (typeof texto === 'string') {
        alert(`Número de caracteres: ${texto.length}`);
    } else {
        alert('Error: El valor ingresado no es una cadena de texto.');
        contarCaracteres();
    }
};

const recortarTexto = () => {
    const texto = prompt('Ingrese un texto:');
    const longitud = parseInt(prompt('Ingrese la longitud a la que desea recortar el texto:'));
    if (typeof texto === 'string' && !isNaN(longitud)) {
        const resultado = texto.slice(0, longitud);
        alert(`Texto recortado: "${resultado}"`);
    } else {
        alert('Error: Los parámetros ingresados no son válidos.');
        recortarTexto();
    }
};

const esPrimo = () => {
    const numero = parseInt(prompt('Ingrese un número:'));
    if (!isNaN(numero) && numero > 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                alert('No es primo');
                return;
            }
        }
        alert('Es primo');
    } else {
        alert('Error: El valor ingresado no es un número válido o es menor o igual a 1.');
        esPrimo();
    }
};

const aplicarDescuento = () => {
    const monto = parseFloat(prompt('Ingrese el monto:'));
    const descuento = parseFloat(prompt('Ingrese el descuento en porcentaje:'));
    if (!isNaN(monto) && !isNaN(descuento) && monto >= 0 && descuento >= 0 && descuento <= 100) {
        const descuentoAplicado = monto * (descuento / 100);
        const montoConDescuento = monto - descuentoAplicado;
        alert(`Monto con descuento: $${montoConDescuento}`);
    } else {
        alert('Error: Los parámetros ingresados no son válidos.');
        aplicarDescuento();
    }
};

const calcularEdad = () => {
    const fechaString = prompt('Ingrese una fecha en formato yyyy-mm-dd:');
    const fecha = new Date(fechaString);
    if (fecha instanceof Date && !isNaN(fecha)) {
        const hoy = new Date();
        const diferencia = hoy.getTime() - fecha.getTime();
        const añosPasados = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
        alert(`Edad: ${añosPasados} años`);
    } else {
        alert('Error: El valor ingresado no es una fecha válida.');
        calcularEdad();
    }
};
