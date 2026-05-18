function evaluarNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        throw new TypeError('nota inválida');
    }
    if (nota >= 7) return 'Aprobado';
    if (nota >= 4 && nota < 7) return 'Supletorio';
    return 'Reprobado';
}

module.exports = { evaluarNota };