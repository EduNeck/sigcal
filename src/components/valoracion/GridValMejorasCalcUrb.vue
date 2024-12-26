<template>
  <v-container>
    <v-card>
      <v-card-title>
        Valoración Mejoras Urbano
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="mejoras"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title></v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar"
                single-line
                hide-details
              ></v-text-field>
              <v-btn color="#114358" class="mx-2 custom-text-color" @click="exportCSV">Exportar CSV</v-btn>
              <v-btn color="#114358" class="mx-2 custom-text-color" @click="exportPDF">Exportar PDF</v-btn>
              <v-btn color="#114358" class="mx-2 custom-text-color" @click="printTable">Imprimir</v-btn>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="navigateToMenuPrincipal">Salir</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GridValMejorasCalUrb',
  components: {
    
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID Mejoras', value: 'id_mejoras' },
        { text: 'ID Predio', value: 'id_predio' },
        { text: 'Clave Catastral', value: 'clave_catastral' },
        { text: 'Tipo Zona', value: 'tipo_zona' },
        { text: 'ID Obra', value: 'id_obra' },
        { text: 'Obra', value: 'obra' },
        { text: 'Valor Unitario', value: 'valor_unitario' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'ID Estado', value: 'id_estado' },
        { text: 'Estado', value: 'estado' },
        { text: 'Factor Estado', value: 'factor_estado' },
        { text: 'Valor', value: 'valor' },
        { text: 'Año Val', value: 'anio_val' },
        { text: 'Fecha Proceso', value: 'fecha_proceso' },
        { text: 'Usuario', value: 'usuario' },
      ],
      mejoras: [],
    };
  },
  created() {
    this.fetchMejoras();
  },
  methods: {
    async fetchMejoras() {
      try {
        const response = await axios.get('http://localhost:3001/api/valoracion_mejoras_cal');
        this.mejoras = response.data;
      } catch (error) {
        console.error('Error fetching mejoras:', error);
      }
    },
    navigateToMenuPrincipal() {
      this.$router.push('/menu-urbano');
    },
    exportCSV() {
      
    },
    exportPDF() {

    },
    printTable() {
      const printContent = document.querySelector('.v-data-table');
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Imprimir</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(printContent.outerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    },
  },
};
</script>

<style scoped>
.custom-text-color {
  color: #F1ECE7; 
}
</style>