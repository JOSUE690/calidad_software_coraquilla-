const esPar = require('./esPar');

describe('Pruebas para la función esPar', () => {

    test('Happy path', () => {
        expect(esPar(2)).toBe(true);
        expect(esPar(4)).toBe(true);
    });

    test('Sad path', () => {
        expect(() => esPar(3.5)).toThrow(TypeError);
        expect(() => esPar('texto')).toThrow('n debe ser entero');
    });

});