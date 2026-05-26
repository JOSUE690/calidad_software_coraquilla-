const sumarPares = require('./sumarPares');

describe('Sumar Pares', () => {
    test('Happy path: [5,5,5] => 0', () => {
        expect(sumarPares([5, 5, 5])).toBe(0);
    });

    test('Happy path: [6,6,6] => 3', () => {
        expect(sumarPares([6, 6, 6])).toBe(3);
    });

    test('Happy path: [4,5,6,7,8] => 3', () => {
        expect(sumarPares([4, 5, 6, 7, 8])).toBe(3); // 4, 6 y 8 son pares
    });

    test('Sad path: arreglo no válido', () => {
        expect(() => sumarPares(0)).toThrow('Arreglo no válido');
        expect(() => sumarPares([])).toThrow('Arreglo no válido');
    });
});