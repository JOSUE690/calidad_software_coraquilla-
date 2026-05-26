function sumarPares(numeros) {
    // Validar si es arreglo y si no está vacío
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('Arreglo no válido');
    }

    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        // Verifica si el número es par
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

module.exports = sumarPares;