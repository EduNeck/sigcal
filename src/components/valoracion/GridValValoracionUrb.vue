<template>
  <v-container>
    <v-card>
      <v-card-title>
        Valoración Urbano
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="valoraciones"
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
  name: 'GridValValoracionUrb',
  components: {

  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Tipo Predio', value: 'tipo_predio' },
        { text: 'PH', value: 'ph' },
        { text: 'Clave Catastral', value: 'clave_catastral' },
        { text: 'Clave Anterior', value: 'clave_anterior' },
        { text: 'Parroquia', value: 'parroquia' },
        { text: 'Número Documento', value: 'numero_documento' },
        { text: 'Alicuota', value: 'alicuota' },
        { text: 'Porcentaje Participación', value: 'porcentaje_participacion' },
        { text: 'Área Suelo Porcentual', value: 'area_suelo_porcentual' },
        { text: 'Área Construcciones Porcentual', value: 'area_construcciones_porcentual' },
        { text: 'Valor Suelo Porcentual', value: 'valor_suelo_porcentual' },
        { text: 'Valor Construcciones Porcentual', value: 'valor_construcciones_porcentual' },
        { text: 'Valor Instalaciones Porcentual', value: 'valor_instalaciones_porcentual' },
        { text: 'Valor Adicionales Porcentual', value: 'valor_adicionales_porcentual' },
        { text: 'Avalúo Predio Porcentual', value: 'avaluo_predio_porcentual' },
        { text: 'Año Proceso', value: 'anio_proceso' },
        { text: 'ID Tenencia Propiedad', value: 'id_tenencia_propiedad' },
        { text: 'ID Predio', value: 'id_predio' },
        { text: 'Propietario', value: 'propietario' },
        { text: 'Fecha Proceso', value: 'fecha_proceso' },
      ],
      valoraciones: [],
    };
  },
  created() {
    this.fetchValoraciones();
  },
  methods: {
    async fetchValoraciones() {
      try {
        const response = await axios.get('http://localhost:3001/api/valores_patrimonio_urb');
        this.valoraciones = response.data;
      } catch (error) {
        console.error('Error fetching valoraciones:', error);
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