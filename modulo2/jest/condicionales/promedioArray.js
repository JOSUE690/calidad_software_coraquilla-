function promedioArray(numeros) {
    // Validar si es arreglo y si no está vacío
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new TypeError('Arreglo no válido');
    }
    
    let total = 0;
    // Empezamos en i = 0
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total / numeros.length;
}

module.exports = promedioArray;