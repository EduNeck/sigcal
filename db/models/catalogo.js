// db/models/catalogo.js
const db = require('../config');

// Función para obtener el catálogo basado en id_tipo_atributo
const getCatalogoByTipoAtributo = async (id_tipo_atributo) => {
  const query = `
    SELECT b.id, b.descripcion, b.codigo
    FROM public.catastro_tipo_atributo a
    LEFT JOIN public.catastro_catalogo b ON b.id_tipo_atributo = a.id
    WHERE b.id_tipo_atributo = $1
    ORDER BY b.codigo
  `;
  try {
    const result = await db.query(query, [id_tipo_atributo]);
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

module.exports = {
  getCatalogoByTipoAtributo,
};
