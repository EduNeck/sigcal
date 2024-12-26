<template>
  <v-container>
    <v-card class="mx-auto block-color">
      <v-card-title class="d-flex justify-center">
        <h3>Formulario Fitto Corvini</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="fittoCorvini.id"
                label="ID"
                :rules="[v => !!v || 'ID es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="fittoCorvini.desde"
                label="Desde"
                :rules="[v => !!v || 'Desde es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="fittoCorvini.hasta"
                label="Hasta"
                :rules="[v => !!v || 'Hasta es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="fittoCorvini.estado"
                label="Estado"
                :rules="[v => !!v || 'Estado es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="fittoCorvini.factor"
                label="Factor"
                :rules="[v => !!v || 'Factor es requerido']"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submit">Guardar</v-btn>
        <v-btn color="secondary" @click="limpiarFormulario">Limpiar</v-btn>
        <v-btn color="secondary" class="mx-2 custom-text-color" @click="navigateBack">Regresar</v-btn>
      </v-card-actions>
    </v-card>
    <v-overlay :value="snackbar" :z-index="1000" color="rgba(0, 0, 0, 0.7)">
      <v-card class="mx-auto" max-width="400" dark>
        <v-card-text>
          {{ snackbarMessage }}
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="pink" text @click="snackbar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-container>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'FormFittoCorvini',
  data() {
    return {
      valid: false,
      fittoCorvini: {
        id: '',
        desde: '',
        hasta: '',
        estado: '',
        factor: '',
      },
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        console.log('Formulario válido', this.fittoCorvini);
        this.snackbarMessage = 'Datos guardados exitosamente!';
        this.snackbar = true;
      }
    },
    limpiarFormulario() {
      this.fittoCorvini = {
        id: '',
        desde: '',
        hasta: '',
        estado: '',
        factor: '',
      };
      this.$refs.form.reset();
    },
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.custom-text-color {
  color: #fff !important;
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
}

.elevation-1 {
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}
</style>