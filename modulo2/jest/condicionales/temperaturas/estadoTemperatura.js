function estadoTemperatura(temp) {
    if (typeof temp !== 'number' || Number.isNaN(temp) || temp < -50 || temp > 60) {
        throw new TypeError('temperatura inválida');
    }

    if (temp >= 30) {
        return "Calor";
    } else if (temp >= 15) {
        return "Templado";
    } else {
        return "Frio";
    }
}

module.exports = { estadoTemperatura };