const { evaluarNota } = require('./evaluarNota');

describe('Pruebas de calidad para evaluarNota', () => {
    
    test('Happy path: Estados de calificación', () => {
        expect(evaluarNota(8.5)).toBe('Aprobado');
        expect(evaluarNota(7)).toBe('Aprobado');
        expect(evaluarNota(5.5)).toBe('Supletorio');
        expect(evaluarNota(4)).toBe('Supletorio');
        expect(evaluarNota(2)).toBe('Reprobado');
    });

    test('Sad path: Notas fuera de rango o tipo incorrecto', () => {
        expect(() => evaluarNota(-2)).toThrow('nota inválida');
        expect(() => evaluarNota(12)).toThrow('nota inválida');
        expect(() => evaluarNota('diez')).toThrow('nota inválida');
    });

});