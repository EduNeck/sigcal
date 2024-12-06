<template>
    <v-container>
      <v-card class="mx-auto" max-width="800">
        <v-card-title class="d-flex justify-center"><h3>Búsqueda de Predios</h3></v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  label="Parroquia"
                  v-model="parroquia"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-text-field
                  label="Sector"
                  v-model="sector"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-text-field
                  label="Clave Catastral"
                  v-model="claveCatastral"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-text-field
                  label="Apellidos y Nombres / RUC"
                  v-model="apellidosNombresRuc"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-text-field
                  label="Número de Documento"
                  v-model="numeroDocumento"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-text-field
                  label="Clave Catastral Anterior"
                  v-model="claveCatastralAnterior"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"  md="12">
                <v-select
                  label="Tipo Predio"
                  v-model="tipoPredio"
                  :items="['Urbano', 'Rural']"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="buscar">Buscar</v-btn>
          <v-btn color="secondary" @click="limpiarFiltros">Limpiar Filtros</v-btn>
          <v-btn color="green" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>

<script>
export default {
  name: 'BusquedaPredios',
  data() {
    return {
      parroquia: '',
      sector: '',
      claveCatastral: '',
      apellidosNombresRuc: '',
      numeroDocumento: '',
      claveCatastralAnterior: '',
      tipoPredio: ''
    }
  },
  methods: {
    buscar() {
      // Lógica para buscar predios
      console.log('Buscar predios con los filtros:', this.$data);
    },
    limpiarFiltros() {
      // Lógica para limpiar los filtros
      this.parroquia = '';
      this.sector = '';
      this.claveCatastral = '';
      this.apellidosNombresRuc = '';
      this.numeroDocumento = '';
      this.claveCatastralAnterior = '';
      this.tipoPredio = '';
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
</style>
