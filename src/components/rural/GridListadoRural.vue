<template>
    <v-container>
      <v-card class="mx-auto block-color" max-width="1800">
        <v-card-title class="d-flex justify-center"><h3>LISTADO PREDIAL URBANO</h3></v-card-title>
        <v-btn color=#668A4C style="color: white;" @click="navigateToMenuRural" class="mx-2">Salir</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#668A4C dark v-bind="attrs" v-on="on" style="color: white;">Exportar</v-btn>
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
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'GridListadoUrbano',
    data() {
      return {
        search: '',
        headers: [
          { text: 'Clave Catastral', value: 'clave_catastral' },
          { text: 'Clave Catastral Anterior', value: 'clave_catastral_anterior' },
          { text: 'Tipo Predio', value: 'tipo_predio' },
          { text: 'Régimen', value: 'regimen_propiedad' },
          { text: 'Alicuota', value: 'alicuota' },
          { text: 'Área Terreno', value: 'area_terreno' },
          { text: 'Área Común Terreno', value: 'area_comun_terreno' },
          { text: 'Unidad', value: 'unidad' },
          { text: 'Área Individual Construida', value: 'area_individual_construida' },
          { text: 'Área Común Construida', value: 'area_comun_construida' },
          { text: 'Eje Principal', value: 'eje_principal' },
          { text: 'Eje Secundario', value: 'eje_secundario' },
          { text: 'Sector', value: 'sector' },
        ],
        items: [
          // Los datos de los ítems deben ser provistos aquí
          // Ejemplo:
          {
            clave_catastral: '1702521670002', 
            clave_catastral_anterior: '46-00174',
            tipo_predio: 'Urbano',
            regimen_propiedad: 'Unipropiedad',
            alicuota: '10,547',
            area_terreno: '500,0000',
            area_comun_terreno: '200,32',
            unidad: 'm2',
            area_individual_construida: '150,65',
            area_comun_construida: '50,89',
            eje_principal: 'Zamora',
            eje_secundario: 'San Antonio',
            sector: 'Barrio Central'
            
          },
        ],
      }
    },
    methods: {
      navigateToMenuRural() { 
       this.$router.push('/menu-rural'); 
      },
      print() {
        window.print();
      },
      exportPDF() {
        // Lógica para exportar a PDF
        console.log('Exportar a PDF');
      },
      exportCSV() {
        // Lógica para exportar a CSV
        console.log('Exportar a CSV');
      }
    }    
  }
  </script>
  
  <style scoped>
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .block-color {
   background-color: #F1ECE7;
   color: #668A4C; 
  }
  </style>
  