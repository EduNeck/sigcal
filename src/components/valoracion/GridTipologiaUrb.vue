<template>
  <v-container>
    <v-card>
      <v-card-title>
        Tipología Urbana
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="tipologias"
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
  name: 'GridTipologiaUrb',
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Tipo Zona', value: 'tipo_zona' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Año', value: 'anio' },
        { text: 'Vida Útil Edificios', value: 'vida_util_edificios' },
        { text: 'Residual Edificios', value: 'residual_edificios' },
        { text: 'Vida Útil Casas', value: 'vida_util_casas' },
        { text: 'Residual Casas', value: 'residual_casas' },
      ],
      tipologias: [],
    };
  },
  created() {
    this.fetchTipologias();
  },
  methods: {
    async fetchTipologias() {
      try {
        const response = await axios.get('http://localhost:3001/api/valores_tipologia_urb');
        this.tipologias = response.data;
      } catch (error) {
        console.error('Error fetching tipologias:', error);
      }
    },
    navigateToMenuPrincipal() {
      this.$router.push('/menu-urbano');
    },
    exportCSV() {
      // Implementar la lógica para exportar CSV
    },
    exportPDF() {
      // Implementar la lógica para exportar PDF
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