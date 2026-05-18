const test = require('node:test');
const assert = require('node:assert');
const { estadoTemperatura } = require('./estadoTemperatura');

// === PRUEBAS DE CAMINO IDEAL (HAPPY PATH) ===

test('Prueba: Cuando la temperatura es >= 30 debe retornar "Calor"', () => {
    assert.strictEqual(estadoTemperatura(30), 'Calor');
    assert.strictEqual(estadoTemperatura(45), 'Calor');
});

test('Prueba: Cuando la temperatura está entre 15 y 29 debe retornar "Templado"', () => {
    assert.strictEqual(estadoTemperatura(15), 'Templado');
    assert.strictEqual(estadoTemperatura(25), 'Templado');
});

test('Prueba: Cuando la temperatura es menor a 15 debe retornar "Frio"', () => {
    assert.strictEqual(estadoTemperatura(14), 'Frio');
    assert.strictEqual(estadoTemperatura(-10), 'Frio');
});

// === PRUEBAS DE ERRORES (SAD PATH) ===

test('Prueba: Si mandan texto o NaN debe lanzar "temperatura inválida"', () => {
    assert.throws(() => estadoTemperatura('texto'), /temperatura inválida/);
    assert.throws(() => estadoTemperatura(NaN), /temperatura inválida/);
});

test('Prueba: Si es menor a -50 o mayor a 60 debe lanzar "temperatura inválida"', () => {
    assert.throws(() => estadoTemperatura(-51), /temperatura inválida/);
    assert.throws(() => estadoTemperatura(61), /temperatura inválida/);
});