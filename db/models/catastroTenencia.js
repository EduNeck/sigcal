// db/models/catastroTenencia.js
const db = require('../config');

// Función para insertar un registro en la tabla `Catastro Tenencia`
const insertCatastroTenencia = async (data) => {
    const query = ` INSERT INTO public.catastro_tenencia(
                        permite_ingreso, presenta_escritura, asentamiento_de_hecho, conflicto, 
                        porcentaje_participacion, id_forma_propiedad, id_propietario, id_prov_protocol,
                        id_can_protocol, fecha_inscripcion, numero_notaria, area_registro, id_unidad,
                        id_provincia, id_canton, fecha_escritura, repertorio, folio, numero_registro,
                        lindero_norte, lindero_sur, lindero_este, lindero_oeste, propietario_anterior        
                    )VALUES ( 
                        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
                        $11, $12, $13, $14, $15, $16, $17, $18, $19,
                        $20, $21, $22, $23, $24) RETURNING id_tenencia;`;
    const values = [
        data.permite_ingreso, data.presenta_escritura, data.asentamiento_de_hecho,
        data.conflicto, data.porcentaje_participacion, data.id_forma_propiedad,
        data.id_propietario, data.id_prov_protocol, data.id_can_protocol,
        data.fecha_inscripcion, data.numero_notaria, data.area_registro,
        data.id_unidad, data.id_provincia, data.id_canton, data.fecha_escritura,
        data.repertorio, data.folio, data.numero_registro, data.lindero_norte,
        data.lindero_sur, data.lindero_este, data.lindero_oeste, data.propietario_anterior
    ];

    try {
        const result = await db.query(query, values);
        return result.rows[0].id_tenencia;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

// Función para actualizar un registro en la tabla `Catastro Tenencia`
const updateCatastroTenencia = async (id, data) => {
    const query = ` UPDATE public.catastro_tenencia
                    SET permite_ingreso = $1, presenta_escritura = $2, asentamiento_de_hecho = $3, conflicto = $4,
                        porcentaje_participacion = $5, id_forma_propiedad = $6, id_propietario = $7, id_prov_protocol = $8,
                        id_can_protocol = $9, fecha_inscripcion = $10, numero_notaria = $11, area_registro = $12,
                        id_unidad = $13, id_provincia = $14, id_canton = $15, fecha_escritura = $16, repertorio = $17,
                        folio = $18, numero_registro = $19, lindero_norte = $20, lindero_sur = $21, lindero_este = $22,
                        lindero_oeste = $23, propietario_anterior = $24
                    WHERE id_tenencia = $25 RETURNING *;`;
    const values = [
        data.permite_ingreso, data.presenta_escritura, data.asentamiento_de_hecho,
        data.conflicto, data.porcentaje_participacion, data.id_forma_propiedad,
        data.id_propietario, data.id_prov_protocol, data.id_can_protocol,
        data.fecha_inscripcion, data.numero_notaria, data.area_registro,
        data.id_unidad, data.id_provincia, data.id_canton, data.fecha_escritura,
        data.repertorio, data.folio, data.numero_registro, data.lindero_norte,
        data.lindero_sur, data.lindero_este, data.lindero_oeste, data.propietario_anterior, id
    ];

    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};

// Función para obtener un registro de la tabla `Catastro Tenencia`
const getCatastroTenenciaById = async (id) => {
    const query = `SELECT * FROM public.catastro_tenencia WHERE id_tenencia = $1;`;
    const values = [id];

    try {
        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
};


module.exports = {
    insertCatastroTenencia,
    updateCatastroTenencia,
    getCatastroTenenciaById    
}