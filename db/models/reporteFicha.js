// db/models/reporteFicha.js
const db = require('../config');

// Función para insertar un registro en la tabla `Listado Predios`
const getListadoCatastroPredio = async () => {
    const query = `
      SELECT * FROM reporte_ficha.listado_predios;`;
    try {
        const result = await db.query(query);
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};


module.exports = {
    getListadoCatastroPredio
};