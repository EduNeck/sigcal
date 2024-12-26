const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const catastroCiudadanoModel = require('./db/models/catastroCiudadano');
const catalogoModel = require('./db/models/catalogo');
const catastoPredioModel = require('./db/models/catastroPredio');  
const reporteFichaModel = require('./db/models/reporteFicha');
const catastroParroquia = require('./db/models/catastroParroquia');
const catastroTenenciaModel = require('./db/models/catastroTenencia');
const geoConsultasModel = require('./db/models/geoConsultas');
const valoracionModel = require('./db/models/valoracion');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors()); // Habilitar CORS para todas las solicitudes
app.use(express.json()); // Middleware para parsear JSON

///////////////
// CATALOGO //
/////////////

// Ruta para obtener la descripción del catálogo por ID
app.get('/api/catalogo/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10); 
  if (isNaN(id)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' });
  }

  try {
    const descripcion = await catalogoModel.getDescripcionById(id);
    if (descripcion) {
      res.json(descripcion);
    } else {
      res.status(404).json({ error: 'Descripción no encontrada' });
    }
  } catch (error) {
    console.error('Error fetching descripcion:', error);
    res.status(500).json({ error: 'Error al obtener la descripción' });
  }
});

// Ruta para obtener todas las parroquias 
app.get('/api/catastro_parroquia', async (req, res) => { 
  try { 
    const parroquias = await catastroParroquia.getAllCatastroParroquia();
    res.json(parroquias); 
  } catch (err) { 
    console.error('Error fetching parroquias:', err); 
    res.status(500).send('Server Error'); 
  } 
});

// Nueva ruta para obtener el catálogo basado en id_tipo_atributo
app.get('/api/catalogo', async (req, res) => {
  const { id_tipo_atributo } = req.query;
  try {
    const data = await catalogoModel.getCatalogoByTipoAtributo(id_tipo_atributo);
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/////////////////////////
// CATASTRO CIUDADANO //
///////////////////////

// Ruta para obtener todos los registros de catastro_ciudadano
app.get('/api/catastro_ciudadano', async (req, res) => {
  try {
    const data = await catastroCiudadanoModel.getAllCatastroCiudadano();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener ciudadano un registro por ID
app.get('/api/catastro_ciudadano/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await catastroCiudadanoModel.getCatastroCiudadanoById(id);
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Nueva ruta para insertar un registro en catastro_ciudadano
app.post('/api/catastro_ciudadano', async (req, res) => {
  try {
    const newRecord = await catastroCiudadanoModel.insertCatastroCiudadano(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para actualizar un registro por ID
app.put('/api/catastro_ciudadano/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await catastroCiudadanoModel.updateCatastroCiudadano(id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

///////////////////////
// CATASTRO PREDIO  //
/////////////////////

// Ruta para insertar un registro en la tabla `catastro_predio`
app.post('/api/catastro_predio', async (req, res) => {
  try {
    const newRecordId = await catastoPredioModel.insertCatastroPredio(req.body);
    res.status(201).json({ id: newRecordId });
  } catch (err) {
    console.error('Error inserting catastro_predio:', err);
    res.status(500).json({ error: err.message, detail: err.detail });
  }
});

// Ruta para actualizar un registro en la tabla `catastro_predio`
app.put('/api/catastro_predio/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRecord = await catastoPredioModel.updateCatastroPredio(id, req.body);
    res.json(updatedRecord);
  } catch (err) {
    console.error('Error updating catastro_predio:', err);
    res.status(500).json({ error: err.message, detail: err.detail });
  }
});

// Ruta para obtener un predio por ID 
app.get('/api/catastro_predio/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const predio = await catastoPredioModel.getCatastroPredioById(id); 
    if (predio) {
      res.json(predio);
    } else {
      res.status(404).send('Predio not found');
    }
  } catch (error) {
    console.error('Error fetching predio:', error.message, error.stack);
    res.status(500).send('Internal Server Error');
  }
});

////////////////////////
// CATASTRO TENENCIA //
//////////////////////

// Ruta para grabar los registros de la tabla `catastro_tenencia`
app.post('/api/catastro_tenencia', async (req, res) => {  
  try {
    const newRecordId = await catastroTenenciaModel.insertCatastroTenencia(req.body);
    res.status(201).json(newRecordId);
  } catch (err) {
    console.error('Error inserting catastro_tenencia:', err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para actualizar un registro de la tabla `catastro_tenencia` basado en su ID
app.put('/api/catastro_tenencia/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRecord = await catastroTenenciaModel.updateCatastroTenencia(id, req.body);
    res.json(updatedRecord);
  } catch (err) {
    console.error('Error updating catastro_tenencia:', err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para obtener un registro de la tabla `catastro_tenencia` basado en su ID
app.get('/api/catastro_tenencia/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const tenencia = await catastroTenenciaModel.getCatastroTenenciaById(id);
    if (tenencia) {
      res.json(tenencia);
    } else {
      res.status(404).send('Tenencia not found');
    }
  } catch (error) {
    console.error('Error fetching tenencia:', error.message, error.stack);
    res.status(500).send('Internal Server Error');
  }
});

////////////////////
// Geo Consultas //
//////////////////
app.get('/api/geo_consultas/area_predio/:codCat', async (req, res) => {
  const codCat = req.params.codCat;
  try {
    const data = await geoConsultasModel.getAreaPredio(codCat);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send('Area de predio no encontrada');
    }
  } catch (err) {
    console.error('Error fetching area de predio:', err);
    res.status(500).send('Server Error');
  }  
    
});

//////////////////////
// Reportes Fichas //
////////////////////

// Ruta para obtener todos los registros de la tabla `ficha_predio`
app.get('/api/ficha_predio', async (req, res) => {
  try {
    const data = await reporteFichaModel.getListadoCatastroPredio();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//////////////////
// Valoración  //
////////////////

// Ruta para obtener todos los registros de la tabla `valoracion_suelo_cal`
app.get('/api/valoracion_suelo_cal', async (req, res) => {
  try {
    const data = await valoracionModel.getAllValSueloCal();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener todos los registros de la tabla `valoracion_mejoras_cal`
app.get('/api/valoracion_mejoras_cal', async (req, res) => {
  try {
    const data = await valoracionModel.getAllValMejorasCal();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener todos los registros de la tabla `predio_resultado_urb`
app.get('/api/predio_resultado_urb', async (req, res) => {
  try {
    const data = await valoracionModel.getAllPredioResultadoUrb();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener todos los registros de la tabla `valores_patrimonio_urb`
app.get('/api/valores_patrimonio_urb', async (req, res) => {
  try {
    const data = await valoracionModel.getAllValoresPatrimonio();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//  Ruta para obtener todos los registros de la tabla `valores_tipologia_urb` 
app.get('/api/valores_tipologia_urb', async (req, res) => {
  try {
    const data = await valoracionModel.getAllTipologiaUrb();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener todos los registros de la tabla `factor_tamaño_urb`
app.get('/api/factor_tamanio_urb', async (req, res) => {
  try {
    const data = await valoracionModel.getAllFactorTamanioUrb();
    res.json(data ); 
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener todos los registros de la tabla `val_fito_corvini`
app.get('/api/fitto_corvini', async (req, res) => {
  try {
    const data = await valoracionModel.getAllFittoCorvini();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});




// 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
