function sumaHasta(n) {
    if (!Number.isInteger(n) || n < 1) {
        throw new TypeError('n debe ser entero >= 1');
    }
    
    // Usamos la fórmula de Gauss para eficiencia O(1)
    return n * (n + 1) / 2;
}

// Este bloque permite que el archivo "corra" si lo ejecutas directamente
if (require.main === module) {
    try {
        const numero = 5;
        console.log(`La suma de 1 hasta ${numero} es: ${sumaHasta(numero)}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

module.exports = sumaHasta;