// db/models/catastroPredio.js
const db = require('../config');

// Función para insertar un registro en la tabla `Catastro Predio`
const insertCatastroPredio = async (data) => {
    const query = `
      INSERT INTO public.catastro_predio (id_tipo_predio, id_regimen_propiedad, clave_catastral_anterior, 
        clave_catastral, id_prov, id_can, id_par, cod_zon, cod_sec, cod_pol_man, cod_pred, cod_uni, cod_bloq, 
        id_tipo_piso, cod_piso, alicuota, area_terreno, area_comun_terreno, id_unidad_area, 
        area_individual_construida, area_comun_construida, eje_principal, eje_secundario, sector
      )VALUES(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19,
        $20, $21, $22, $23, $24)
      RETURNING id_predio;
    `;
    const values = [
      data.id_tipo_predio, data.id_regimen_propiedad, data.clave_catastral_anterior, data.clave_catastral,
      data.id_prov, data.id_can, data.id_par, data.cod_zon, data.cod_sec, data.cod_pol_man, 
      data.cod_pred, data.cod_uni, data.cod_bloq, data.id_tipo_piso, data.cod_piso, data.alicuota, 
      data.area_terreno, data.area_comun_terreno, data.id_unidad_area, data.area_individual_construida,
      data.area_comun_construida, data.eje_principal, data.eje_secundario, data.sector        
        
    ];

    try {
        const result = await db.query(query, values);
        return result.rows[0].id_predio;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

// Función para actualizar un registro en la tabla `Catastro Predio`
const updateCatastroPredio = async (id, data) => {
    const query = `
      UPDATE public.catastro_predio
      SET id_tipo_predio = $1, id_regimen_propiedad = $2, clave_catastral_anterior = $3, clave_catastral = $4,
          id_prov = $5, id_can = $6, id_par = $7, cod_zon = $8, cod_sec = $9,
          cod_pol_man = $10, cod_pred = $11, cod_uni = $12, cod_bloq = $13, id_tipo_piso = $14, cod_piso = $15,
          alicuota = $16, area_terreno = $17, area_comun_terreno = $18, id_unidad_area = $19, area_individual_construida = $20,
          area_comun_construida = $21, eje_principal = $22, eje_secundario = $23, sector = $24
      WHERE id_predio = $25
      RETURNING *;
    `;
    const values = [
      data.id_tipo_predio, data.id_regimen_propiedad, data.clave_catastral_anterior, data.clave_catastral,
      data.id_prov, data.id_can, data.id_par, data.cod_zon, data.cod_sec, data.cod_pol, 
      data.cod_pred, data.cod_uni, data.cod_bloq, data.id_tipo_piso, data.cod_piso, data.alicuota,
      data.area_terreno, data.area_comun_terreno, data.id_unidad_area, data.area_individual_construida,
      data.area_comun_construida, data.eje_principal, data.eje_secundario, data.sector, id
    ];

    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

// Función para obtener un registro de la tabla `catastro_predio` basado en su ID
const getCatastroPredioById = async (id) => {
    const query = `
      SELECT * FROM public.catastro_predio WHERE id_predio = $1`;
    try {
        const result = await db.query(query, [id]);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

module.exports = {
    insertCatastroPredio,
    updateCatastroPredio,
    getCatastroPredioById
}