// db/models/catastroParroquia.js
const db = require('../config');

// Función para obtener todos los registros de la tabla `catastro_parroquia`
const getAllCatastroParroquia = async () => {
  const query = 'SELECT descripcion, dpa FROM public.catastro_parroquia';
    try {
        const result = await db.query(query);
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

module.exports = {
    getAllCatastroParroquia,
};
