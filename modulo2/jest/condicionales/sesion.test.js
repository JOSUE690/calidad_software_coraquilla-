// matchers > verdadFalsedad > sesion.test.js
const { obtenerUsuarioPorToken, mensajeBienvenida, tieneSesionActiva } = require('./sesion');

describe('Pruebas de Verdad y Falsedad en Sesiones', () => {

    const usuarios = [{ token: 'abc1234', nombre: 'Ana', activo: true }];

    // toBeNull - el valor ES exactamente null
    test('token inválido devuelve null', () => {
        const usuario = obtenerUsuarioPorToken('token_falso', usuarios);
        expect(usuario).toBeNull();
    });

    // toBeNull - token vacío también devuelve null
    test('token vacío devuelve null', () => {
        expect(obtenerUsuarioPorToken('', usuarios)).toBeNull();
    });

    // not.toBeNull - el valor NO es null
    test('token correcto devuelve un usuario que no es null', () => {
        const usuario = obtenerUsuarioPorToken('abc1234', usuarios);
        expect(usuario).not.toBeNull();
    });

    // toBeUndefined - el valor ES exactamente undefined
    test('mensajeBienvenida sin usuario devuelve undefined', () => {
        expect(mensajeBienvenida(null)).toBeUndefined();
    });

    // toBeDefined - el valor NO es undefined
    test('mensajeBienvenida con usuario devuelve un string definido', () => {
        const usuario = { nombre: 'Ana' };
        expect(mensajeBienvenida(usuario)).toBeDefined();
    });

});