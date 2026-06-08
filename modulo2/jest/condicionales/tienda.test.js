// matchers > toContainEqual > tienda.test.js
const { obtenerCatalogo, filtrarPorCategoria } = require('./tienda');

describe('Pruebas de Catálogo de Tienda - Matchers de Arreglos', () => {

    // toContainEqual - el array contiene un objeto con ese contenido exacto
    test('el catálogo contiene el producto Teclado', () => {
        const catalogo = obtenerCatalogo();

        expect(catalogo).toContainEqual({
            id: 2, nombre: 'Teclado', precio: 45, categoria: 'periféricos'
        });
    });

    // .not.toContainEqual - verifica que NO exista un elemento que coincida parcialmente
    test('el catálogo NO contiene un producto con id=99', () => {
        const catalogo = obtenerCatalogo();

        expect(catalogo).not.toContainEqual(
            expect.objectContaining({ id: 99 })
        );
    });

    // Mezcla de toHaveLength y expect.objectContaining
    test('filtrar periféricos devuelve ratón y teclado', () => {
        const catalogo = obtenerCatalogo();
        const perifericos = filtrarPorCategoria(catalogo, 'periféricos');

        // Verifica que la lista tenga exactamente 2 elementos filtrados
        expect(perifericos).toHaveLength(2);
        
        // Verifica que dentro de esos resultados esté al menos el objeto "Ratón"
        expect(perifericos).toContainEqual(
            expect.objectContaining({ nombre: 'Ratón' })
        );
    });

});