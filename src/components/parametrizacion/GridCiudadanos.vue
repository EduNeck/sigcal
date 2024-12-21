<template>
  <v-container>
    <v-card class="mx-auto block-color" max-width="1900">
      <v-card-title class="d-flex justify-center">
        <h3>Lista de Ciudadanos</h3>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="ciudadanos"
          class="elevation-1"
          item-value="id"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Ciudadanos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="fetchCiudadanos">Recargar</v-btn>
              <v-btn color="secondary" class="mx-2 custom-text-color" @click="navigateBack">Regresar</v-btn>
            </v-toolbar>
          </template>
          
          <template 
            v-slot:[`item.id_tipo_persona`]="{ item }"> 
            {{ getDescripcion(item.id_tipo_persona, 'tipoPersona') }} 
          </template>

          <template slot="item.actions" slot-scope="{ item }">
            <router-link :to="{ path: '/ingreso-ciudadano', query: { id: item.id_ciudadano } }">
              <v-btn color="primary">Editar</v-btn>
            </router-link>
          </template>
          <template slot="item.fecha_nacimiento" slot-scope="{ item }">
            {{ formatFecha(item.fecha_nacimiento) }}
          </template>
          <template slot="item.id_ciudadano" slot-scope="{ item }">
            <v-btn text @click="editCiudadano(item)">{{ item.id_ciudadano }}</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GridCiudadanos',
  data() {
    return {
      headers: [
        { text: 'Acciones', value: 'actions', sortable: false },
        { text: 'id', value: 'id_ciudadano' },
        { text: 'Tipo de Persona', value: 'id_tipo_persona' },
        { text: 'Personería', value: 'id_personeria' },
        { text: 'Apellidos', value: 'apellido_primario' },
        { text: 'Nombres', value: 'nombre_principal' },
        { text: 'Tipo de Documento', value: 'id_tipo_documento' },
        { text: 'Número de Documento', value: 'numero_documento' },
        { text: 'Estado Civil', value: 'id_estado_civil' },
        { text: 'Fecha de Nacimiento', value: 'fecha_nacimiento' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Correo', value: 'correo' },
        { text: 'Dirección', value: 'direccion' }
      ],
      ciudadanos: [],
      tipoPersona: [],
    };
  },

  created() {
    this.fetchCiudadanos();
    this.fetchCatalogos();
  },

  methods: {

    async fetchCatalogos() { 
      try { 
        const tipoPersonaResponse = await axios.get('http://localhost:3001/api/catalogo?tipo=tipo_persona'); 
        
        this.tipoPersona = this.mapCatalogo(tipoPersonaResponse.data);         
        } catch (error) { 
          console.error('Error fetching catalogos:', error); 
        } 
      },

      mapCatalogo(data) { 
        const map = {}; 
        data.forEach(item => { 
          map[item.id] = item.descripcion; 
        }); 
        return map; 
      },

    async fetchCiudadanos() {
      try {
        const response = await axios.get('http://localhost:3001/api/catastro_ciudadano');
        this.ciudadanos = response.data;
      } catch (error) {
        console.error('Error fetching ciudadanos:', error);
      }
    },

    getDescripcion(id, catalogo) { 
      return this[catalogo][id] || id; 
    },

    // Formato de fecha
    formatFecha(fecha) {
      if (!fecha) return '';
      const [year, month, day] = fecha.split('-');
      return `${day}-${month}-${year}`;
    },

    // Lógica para editar el ciudadano
    editCiudadano(ciudadano) {
      console.log('Editar ciudadano:', ciudadano);
    },

    // Navega a la pantalla anterior
    navigateBack() { 
      console.log('Regresando a la página anterior');
      this.$router.go(-1); 
    }
  }
};
</script>

<style>
.elevation-1 {
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
}

</style>
