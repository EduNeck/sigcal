<template>
  <v-container>
    <v-card class="mx-auto block-color">
      <v-card-title class="d-flex justify-center">
        <h3>Formulario Tipología</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.id"
                label="ID"
                :rules="[v => !!v || 'ID es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.tipo_zona"
                label="Tipo Zona"
                :rules="[v => !!v || 'Tipo Zona es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.nombre"
                label="Nombre"
                :rules="[v => !!v || 'Nombre es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.anio"
                label="Año"
                :rules="[v => !!v || 'Año es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.vida_util_edificios"
                label="Vida Útil Edificios"
                :rules="[v => !!v || 'Vida Útil Edificios es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.residual_edificios"
                label="Residual Edificios"
                :rules="[v => !!v || 'Residual Edificios es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.vida_util_casas"
                label="Vida Útil Casas"
                :rules="[v => !!v || 'Vida Útil Casas es requerido']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="tipologia.residual_casas"
                label="Residual Casas"
                :rules="[v => !!v || 'Residual Casas es requerido']"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submit">Guardar</v-btn>
        <v-btn color="secondary" @click="limpiarFormulario">Limpiar</v-btn>
        <v-btn color="secondary" class="mx-2 custom-text-color" @click="navigateBack">Salir</v-btn>
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


export default {
  name: 'FormTipologia',
  data() {
    return {
      valid: false,
      tipologia: {
        id: '',
        tipo_zona: '',
        nombre: '',
        anio: '',
        vida_util_edificios: '',
        residual_edificios: '',
        vida_util_casas: '',
        residual_casas: '',
      },
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        console.log('Formulario válido', this.tipologia);
        this.snackbarMessage = 'Datos guardados exitosamente!';
        this.snackbar = true;
      }
    },
    limpiarFormulario() {
      this.tipologia = {
        id: '',
        tipo_zona: '',
        nombre: '',
        anio: '',
        vida_util_edificios: '',
        residual_edificios: '',
        vida_util_casas: '',
        residual_casas: '',
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