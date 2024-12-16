<template>
    <v-container>
      <v-card class="mx-auto block-color" max-width="1800">
        <v-card-title class="d-flex justify-center"><h3>VIVIENDAS REGISTRADAS</h3></v-card-title>
        <v-btn color=#114358 style="color: white;" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#114358 dark v-bind="attrs" v-on="on" style="color: white;">Exportar</v-btn>
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
    name: 'GridFichasRegistradasUrb',
    data() {
      return {
        search: '',
        headers: [
          { text: 'Clave Catastral', value: 'clave_catastral' },
          { text: 'Tipo Vivienda', value: 'clave_catastral_anterior' },
          { text: 'Clasificación', value: 'tipo_predio' },
          { text: 'Ocupación', value: 'regimen_propiedad' },
          { text: 'Posesión', value: 'alicuota' },
        ],
        items: [
          // Los datos de los ítems deben ser provistos aquí
          // Ejemplo:
          {
            clave_catastral: '1702521670002', 
            clave_catastral_anterior: 'Particular',
            tipo_predio: 'Casa',
            regimen_propiedad: 'Ocupada con personas presentes',
            alicuota: 'Arrendada',
            
          },
        ],
      }
    },
    methods: {
      navigateToMenuUrbano() { 
       this.$router.push('/menu-urbano'); 
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
    color: #114358; 
  }
  </style>
  