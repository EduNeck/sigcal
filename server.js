const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const catastroCiudadanoModel = require('./db/models/catastroCiudadano');
const catalogoModel = require('./db/models/catalogo');
const catastroParroquiaModel = require('./db/models/catastroParroquia');
const catastoPredioModel = require('./db/models/catastroPredio');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors()); // Habilitar CORS para todas las solicitudes
app.use(express.json()); // Middleware para parsear JSON

// Ruta para obtener todos los registros de catastro_ciudadano
app.get('/api/catastro_ciudadano', async (req, res) => {
  try {
    const data = await catastroCiudadanoModel.getAllCatastroCiudadano();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Ruta para obtener un registro por ID
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

// Ruta para obtener todos los registros de la tabla `catastro_parroquia`
app.get('/api/catastro_parroquia', async (req, res) => {
  try {
    const data = await catastroParroquiaModel.getAllCatastroParroquia();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});


// Ruta para obtener todos los registros de la tabla `catastro_predio`
app.post('/api/catastro_predio', async (req, res) => {
  try {
    const newRecord = await catastoPredioModel.insertCatastroPredio(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});