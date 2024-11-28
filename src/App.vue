<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title style="font-size: 20px; color: white;">Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded @click="$router.push('/menu-ingreso')">Home</v-btn>      
    </v-app-bar>
    <!-- Rutas -->  
    <router-view></router-view>
    <v-footer color = "primary lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>SIGCAL</strong>
        </v-col>
      </v-row>
    </v-footer>   
  </v-app>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        showPassword: false,
      }
    }
  }
</script>