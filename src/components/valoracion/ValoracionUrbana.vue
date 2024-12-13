<template>
    <v-container>
      <v-card class="mx-auto block-color" max-width="500">
        <v-card-title class="d-flex justify-center"><h3>VALORACIÓN URBANA</h3></v-card-title>
        
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Clave Catastral"
                  v-model="claveCatastral"
                  required
                  color = #F2AA1F
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Año de Valoración"
                  v-model="anioValoracion"
                  type="number"
                  required
                  color = #F2AA1F
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submitForm">Valorar</v-btn>
          <v-btn color="primary" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ValoracionUrbana',
    data() {
      return {
        claveCatastral: '',
        anioValoracion: ''
      }
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
        console.log('Clave Catastral:', this.claveCatastral);
        console.log('Año de Valoración:', this.anioValoracion);
      },

      navigateToMenuUrbano() { 
      this.$router.push('/menu-urbano'); 
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
  