<template>
  <v-container>
    <v-card>
      <v-card-title>
        Valoración Suelo Parcial Urbano
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
              <v-btn color=#114358 class="mx-2 custom-text-color">Exportar CSV</v-btn>
              <v-btn color=#114358 class="mx-2 custom-text-color">Exportar PDF</v-btn>
              <v-btn color=#114358 class="mx-2 custom-text-color">Imprimir</v-btn>
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
  name: 'GridValSueloCalcUrb',
  components: {
    
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Cod Cat', value: 'cod_cat' },
        { text: 'Area Dibujo', value: 'area_dibujo' },
        { text: 'Area Parcial', value: 'area_parcial' },
        { text: 'Predio Zona', value: 'predio_zona' },
        { text: 'Cod Zon', value: 'cod_zon' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Año', value: 'anio' },
        { text: 'Valor 1', value: 'valor1' },
        { text: 'Valor 2', value: 'valor2' },
        { text: 'Valor 3', value: 'valor3' },
        { text: 'Valor 4', value: 'valor4' },
        { text: 'Valor 5', value: 'valor5' },
        { text: 'Area Tipo', value: 'areatipo' },
        { text: 'Frente Tipo', value: 'frentetipo' },
        { text: 'Fondo Tipo', value: 'fondotipo' },
        { text: 'Tipo Zona', value: 'tipo_zona' },
        { text: 'Fecha Proceso', value: 'fecha_proceso' },
        { text: 'Usuario', value: 'usuario' },
        { text: 'Area Gráfica', value: 'area_grafica' },
        { text: 'Frente Relativo', value: 'frente_relativo' },
        { text: 'Fondo Relativo', value: 'fondo_relativo' },
        { text: 'ID Alfa', value: 'id_alfa' },
        { text: 'FTAM', value: 'ftam' },
        { text: 'Forma', value: 'forma' },
        { text: 'FForma', value: 'fforma' },
        { text: 'Localización', value: 'localizacion' },
        { text: 'FLOC', value: 'floc' },
        { text: 'FFrente', value: 'ffrente' },
        { text: 'FFondo', value: 'ffondo' },
        { text: 'Acceso', value: 'acceso' },
        { text: 'FAcceso', value: 'facceso' },
        { text: 'Agua', value: 'agua' },
        { text: 'FAgua', value: 'fagua' },
        { text: 'Alcantarillado', value: 'alcantarillado' },
        { text: 'FAlcantarillado', value: 'falcantarillado' },
        { text: 'Energía', value: 'energia' },
        { text: 'FEnergía', value: 'fenergia' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'FTeléfono', value: 'ftelefono' },
        { text: 'Celular', value: 'celular' },
        { text: 'FCelular', value: 'fcelular' },
        { text: 'Internet', value: 'internet' },
        { text: 'FInternet', value: 'finternet' },
        { text: 'Uso', value: 'uso' },
        { text: 'FUso', value: 'fuso' },
        { text: 'FCorrección', value: 'fcorreccion' },
        { text: 'Valor Parcial', value: 'valor_parcial' },
        { text: 'Número Frentes', value: 'numero_frentes' },
        { text: 'Riego', value: 'riego' },
        { text: 'FRiego', value: 'friego' },
        { text: 'Ocupación', value: 'ocupacion' },
        { text: 'FOcupación', value: 'focupacion' },
        { text: 'Topografía', value: 'topografia' },
        { text: 'FTopografía', value: 'ftopografia' },
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
        const response = await axios.get('http://localhost:3001/api/valoracion_suelo_cal');
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