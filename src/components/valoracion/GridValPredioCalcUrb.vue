<template>
  <v-container>
    <v-card>
      <v-card-title>
        Valoración Predio Urbano
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="predios"
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
  name: 'GridValPredioCalcUrb',
  components: {

  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'ID Predio', value: 'id_predio' },
        { text: 'Clave Catastral', value: 'clave_catastral' },
        { text: 'Año Val', value: 'anio_val' },
        { text: 'Fecha Proceso', value: 'fecha_proceso' },
        { text: 'Procesador', value: 'procesador' },
        { text: 'Tipo Zona', value: 'tipo_zona' },
        { text: 'Area Gráfica', value: 'area_grafica' },
        { text: 'Valor Suelo', value: 'valor_suelo' },
        { text: 'Area Construida', value: 'area_construida' },
        { text: 'Valor Construcciones', value: 'valor_construcciones' },
        { text: 'Valor Adicionales', value: 'valor_adicionales' },
        { text: 'Valor Predio', value: 'valor_predio' },
        { text: 'Tipo Prop', value: 'tipo_prop' },
        { text: 'Alicuota', value: 'alicuota' },
      ],
      predios: [],
    };
  },
  created() {
    this.fetchPredios();
  },
  methods: {
    async fetchPredios() {
      try {
        const response = await axios.get('http://localhost:3001/api/predio_resultado_urb');
        this.predios = response.data;
      } catch (error) {
        console.error('Error fetching predios:', error);
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