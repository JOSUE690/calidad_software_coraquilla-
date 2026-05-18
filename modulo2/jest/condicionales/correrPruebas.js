const assert = require('node:assert');
const { evaluarNota } = require('./evaluarNota');
const esPar = require('./esPar');
const { puedeConducir } = require('./puedeConducir');
const { estadoTemperatura } = require('./temperaturas/estadoTemperatura');

function logSuccess(message) {
    console.log(`✅ ${message}`);
}

function logFailure(message, error) {
    console.error(`❌ ${message}`);
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
}

function test(name, callback) {
    try {
        callback();
        logSuccess(name);
    } catch (error) {
        logFailure(name, error);
    }
}

console.log('🚀 Ejecutando pruebas locales de condicionales con Node...');

// evaluarNota

test('evaluarNota(8.5) => Aprobado', () => {
    assert.strictEqual(evaluarNota(8.5), 'Aprobado');
});

test('evaluarNota(5.5) => Supletorio', () => {
    assert.strictEqual(evaluarNota(5.5), 'Supletorio');
});

test('evaluarNota(2) => Reprobado', () => {
    assert.strictEqual(evaluarNota(2), 'Reprobado');
});

test('evaluarNota invalidas lanza TypeError', () => {
    assert.throws(() => evaluarNota(-1), TypeError);
    assert.throws(() => evaluarNota(12), TypeError);
    assert.throws(() => evaluarNota('diez'), TypeError);
});

// esPar

test('esPar(2) => true', () => {
    assert.strictEqual(esPar(2), true);
});

test('esPar(3.5) lanza TypeError', () => {
    assert.throws(() => esPar(3.5), TypeError);
});

test('esPar("texto") lanza TypeError', () => {
    assert.throws(() => esPar('texto'), TypeError);
});

// puedeConducir

test('puedeConducir(20) => Si', () => {
    assert.strictEqual(puedeConducir(20), 'Si');
});

test('puedeConducir(16) => No', () => {
    assert.strictEqual(puedeConducir(16), 'No');
});

test('puedeConducir invalidas lanza TypeError', () => {
    assert.throws(() => puedeConducir(-1), TypeError);
    assert.throws(() => puedeConducir('18'), TypeError);
});

// estadoTemperatura

test('estadoTemperatura(30) => Calor', () => {
    assert.strictEqual(estadoTemperatura(30), 'Calor');
});

test('estadoTemperatura(22) => Templado', () => {
    assert.strictEqual(estadoTemperatura(22), 'Templado');
});

test('estadoTemperatura(0) => Frio', () => {
    assert.strictEqual(estadoTemperatura(0), 'Frio');
});

test('estadoTemperatura invalidas lanza TypeError', () => {
    assert.throws(() => estadoTemperatura('25'), TypeError);
    assert.throws(() => estadoTemperatura(NaN), TypeError);
    assert.throws(() => estadoTemperatura(-51), TypeError);
    assert.throws(() => estadoTemperatura(61), TypeError);
});

if (process.exitCode === 0 || process.exitCode === undefined) {
    console.log('\n🎉 Todas las pruebas locales pasaron.');
} else {
    console.error('\n⚠️ Algunas pruebas locales fallaron.');
}
