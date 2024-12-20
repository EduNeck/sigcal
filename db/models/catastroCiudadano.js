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
  const query = 'SELECT * FROM public.catastro_ciudadano WHERE id_ciudadano = $1';
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
    INSERT INTO public.catastro_ciudadano (id_tipo_persona, id_personeria, apellido_primario, nombre_principal, 
	 id_tipo_documento, numero_documento, id_estado_civil, fecha_nacimiento, telefono, email, direccion)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;
  const values = [
    data.id_tipo_persona, data.id_personeria, data.apellido_primario, data.nombre_principal,
    data.id_tipo_documento, data.numero_documento, data.id_estado_civil, data.fecha_nacimiento,
    data.telefono, data.email, data.direccion
  ];

  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

// Función para actualizar un registro en la tabla `catastro_ciudadano`
const updateCatastroCiudadano = async (id, data) => {
  const query = `
    UPDATE public.catastro_ciudadano
    SET id_tipo_persona = $1, id_personeria = $2, apellido_primario = $3, nombre_principal = $4,
        id_tipo_documento = $5, numero_documento = $6, id_estado_civil = $7, fecha_nacimiento = $8,
        telefono = $9, email = $10, direccion = $11
    WHERE id_ciudadano = $12
    RETURNING *;
  `;
  const values = [
    data.id_tipo_persona, data.id_personeria, data.apellido_primario, data.nombre_principal,
    data.id_tipo_documento, data.numero_documento, data.id_estado_civil, data.fecha_nacimiento,
    data.telefono, data.email, data.direccion, id
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
  insertCatastroCiudadano, 
  updateCatastroCiudadano
};