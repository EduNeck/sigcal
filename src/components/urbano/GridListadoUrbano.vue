<template>
  <v-container>
    <v-card class="mx-auto block-color" max-width="1800">
      <v-card-title class="d-flex justify-center"><h3>LISTADO PREDIAL URBANO</h3></v-card-title>
      <v-btn color="#114358" style="color: white;" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#114358" dark v-bind="attrs" v-on="on" style="color: white;">Exportar</v-btn>
        </template>
        <v-list>
          <v-list-item @click="print">
            <v-list-item-title>Imprimir</v-list-item-title>
          </v-list-item>
          <v-list-item @click="exportPDF">
            <v-list-item-title>PDF</v-list-item-title>
          </v-list-item>
          <v-list-item @click="exportCSV">
            <v-list-item-title>CSV</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Buscar</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <router-link :to="{ path: '/navegacion-predios', query: { id_predio: item.id_predio } }">
            <v-btn color="primary">Editar</v-btn>
          </router-link>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>


  
<script>
import axios from 'axios';

export default {
  name: 'GridListadoUrbano',
  data() {
    return {
      search: '',
      items: [],
      headers: [
        { text: 'Acciones', value: 'actions', sortable: false },        
        { text: 'ID', value: 'id_predio' },
        { text: 'Tipo de Predio', value: 'tipo_predio' },
        { text: 'Clave Catastral', value: 'clave_catastral' },
        { text: 'Clave Catastral Anterior', value: 'clave_catastral_anterior' },
        { text: 'Parroquia', value: 'parroquia' },
        { text: 'Sector', value: 'sector' },
        { text: 'Apellidos, Nombres o RUC', value: 'apellidos_nombres_ruc' },
        { text: 'Número de Documento', value: 'numero_documento' },
        { text: 'Eje Principal', value: 'eje_principal' },
        { text: 'Eje Secundario', value: 'eje_secundario' }

      ]
    };
  },

  async mounted() {
    await this.fetchPredios();
  },
  methods: {
    async fetchPredios() {
      try {
        const response = await axios.get('http://localhost:3001/api/ficha_predio');
        this.items = response.data;
        console.log('Datos obtenidos:', this.items);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    },

    // Edita un predio
    editPredio(predio) {
      console.log('Editar Predio:', predio);
    },

    navigateToMenuUrbano() {
      this.$router.push('/menu-urbano');
    },

    print() {
      // Lógica para imprimir
    },
    exportPDF() {
      // Lógica para exportar a PDF
    },
    exportCSV() {
      // Lógica para exportar a CSV
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
