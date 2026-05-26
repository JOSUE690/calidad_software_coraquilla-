const promedioArray = require('./promedioArray');

describe('Promedio Array', () => {
    test('Happy path: [5,5,5] => 5', () => {
        expect(promedioArray([5, 5, 5])).toBe(5);
    });

    test('Happy path: [6,6,6] => 6', () => {
        expect(promedioArray([6, 6, 6])).toBe(6);
    });

    test('Sad path: n inválido', () => {
        expect(() => promedioArray(0)).toThrow('Arreglo no válido');
        expect(() => promedioArray([])).toThrow('Arreglo no válido');
    });
});