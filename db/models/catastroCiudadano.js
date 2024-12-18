// db/models/catastroCiudadano.js
const db = require('../config');

// Función para obtener todos los registros de la tabla `catastro_ciudadano`
const getAllCatastroCiudadano = async () => {
  const query = 'SELECT * FROM public.catastro_ciudadano';
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

// Función para obtener un registro por ID
const getCatastroCiudadanoById = async (id) => {
  const query = 'SELECT * FROM public.catastro_ciudadano WHERE id = $1';
  try {
    const result = await db.query(query, [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

// Función para insertar un registro en la tabla `catastro_ciudadano`
const insertCatastroCiudadano = async (data) => {
  const query = `
    INSERT INTO public.catastro_ciudadano (id_tipo_persona, id_personeria, nombres_apellidos_ruc, id_tipo_documento, numero_documento, id_estado_civil, telefono, correo, direccion)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `;
  const values = [
    data.tipoPersona, data.personeria, data.nombresApellidosRuc, data.tipoDocumento, 
    data.numeroDocumento, data.estadoCivil, data.telefono, data.correo, data.direccion
  ];

  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};


module.exports = {
  getAllCatastroCiudadano,
  getCatastroCiudadanoById,
  insertCatastroCiudadano, // Exportar la nueva función

};
