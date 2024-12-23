// db/models/geoConsultas.js
const db = require('../config');


// Recuepera Area de Predio
const getAreaPredio = async (codCat) => {
    const query = `SELECT area FROM public.geo_predio WHERE cod_cat = $1`;
    const values = [codCat];
    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

module.exports = {
    getAreaPredio
}