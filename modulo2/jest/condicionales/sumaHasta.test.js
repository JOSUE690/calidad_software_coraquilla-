const sumaHasta = require('./sumaHasta'); // Importa la función correcta

describe('Suma Hasta', () => {
    test('Happy path: suma hasta 3 es 6', () => {
        expect(sumaHasta(3)).toBe(6); // 1 + 2 + 3 = 6
    });

    test('Sad path: n debe ser entero >= 1', () => {
        expect(() => sumaHasta(3.5)).toThrow('n debe ser entero >= 1');
        expect(() => sumaHasta('10')).toThrow('n debe ser entero >= 1');
    });
});