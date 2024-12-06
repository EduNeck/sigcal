<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="d-flex justify-center">
        <h3>Ingreso de Ciudadano</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                label="Tipo de Persona"
                v-model="tipoPersona"
                :items="['Natural', 'Jurídico']"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                label="Personería"
                v-model="personeria"
                :items="['Privado', 'Público']"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Nombres y Apellidos / RUC"
                v-model="nombresApellidosRuc"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                label="Tipo de Documento"
                v-model="tipoDocumento"
                :items="['Cédula', 'RUC', 'Pasaporte']"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Número de Documento"
                v-model="numeroDocumento"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Estado Civil"
                v-model="estadoCivil"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Teléfono"
                v-model="telefono"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Correo"
                v-model="correo"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Dirección"
                v-model="direccion"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="grey" @click="guardar">Nuevo</v-btn>
        <v-btn color="grey" @click="guardar">Guardar</v-btn>
        <v-btn color="secondary" @click="limpiarFormulario">Limpiar</v-btn>
        <v-btn color="secondary" @click="navigateToMenu">Salir</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'FormIngresoCiudadano',
  data() {
    return {
      tipoPersona: '',
      personeria: '',
      nombresApellidosRuc: '',
      tipoDocumento: '',
      numeroDocumento: '',
      estadoCivil: '',
      telefono: '',
      correo: '',
      direccion: ''
    }
  },
  methods: {
    guardar() {
      // Lógica para guardar los datos del ciudadano
      console.log('Datos del ciudadano:', this.$data);
    },
    limpiarFormulario() {
      // Lógica para limpiar el formulario
      this.tipoPersona = '';
      this.personeria = '';
      this.nombresApellidosRuc = '';
      this.tipoDocumento = '';
      this.numeroDocumento = '';
      this.estadoCivil = '';
      this.telefono = '';
      this.correo = '';
      this.direccion = '';
    },
    navigateToMenu() {
      const tipo = this.$route.query.tipo; // Obtener el tipo desde los parámetros de la URL
      if (tipo === 'urbano') {
        this.$router.push('/menu-urbano');
      } else if (tipo === 'rural') {
        this.$router.push('/menu-rural');
      } else {
        this.$router.push('/menu-ingreso'); // Fallback en caso de que no se especifique el tipo
      }
    }
  }
}
</script>
