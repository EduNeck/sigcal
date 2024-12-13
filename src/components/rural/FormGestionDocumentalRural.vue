<template>
  <v-container>
    <v-card class="mx-auto block-color" max-width="500">
      <v-card-title class="d-flex justify-center"><h3>GESTIÓN DOCUMENTAL</h3></v-card-title>
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
              <v-textarea
                label="Observación"
                v-model="observacion"
                required
                color = #F2AA1F
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-file-input
                label="Subir Archivo"
                v-model="archivo"
                prepend-icon="mdi-paperclip"
                required
                color = #F2AA1F
              ></v-file-input>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="custom-text-color" color=#668A4C style="color: white;" @click="submitForm">Enviar</v-btn>
        <v-btn color=#668A4C style="color: white;" @click="navigateToMenuUrbano" class="mx-2 custom-text-color">Salir</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
  
  <script>
  export default {
    name: 'ObservacionConArchivo',
    data() {
      return {
        claveCatastral: '',
        observacion: '',
        archivo: null
      }
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
        console.log('Clave Catastral:', this.claveCatastral);
        console.log('Observación:', this.observacion);
        console.log('Archivo:', this.archivo);
      },

      navigateToMenuUrbano() { 
       this.$router.push('/menu-rural'); 
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
  