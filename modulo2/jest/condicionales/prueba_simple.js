const sumaHasta = require('./sumaHasta');

try {
    console.log("Probando sumaHasta(3):", sumaHasta(3)); // Debería dar 6
    console.log("Probando sumaHasta(5):", sumaHasta(5)); // Debería dar 15
    console.log("Probando error con 3.5:", sumaHasta(3.5));
} catch (e) {
    console.log("Error detectado correctamente:", e.message);
}