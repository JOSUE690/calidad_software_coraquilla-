function calcularPromedio(numeros) {
    let suma = 0;
    // Usamos el ciclo FOR para sumar los elementos
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    // Calculamos el promedio
    return suma / numeros.length;
}

// Probamos con 3 elementos
const misNumeros = [10, 20, 30];
console.log("El promedio es:", calcularPromedio(misNumeros));

module.exports = calcularPromedio;