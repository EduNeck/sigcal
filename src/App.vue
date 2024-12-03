<template>
  <v-app class="custom-background">
    <v-app-bar app color="gray" dark>
      <v-img
        src="@/assets/logo.png"
        contain
        height="40"
        class="mr-3"
      ></v-img>
      <v-toolbar-title style="font-size: 20px; color: white;">
        Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text rounded @click="$router.push('/menu-ingreso')">Home</v-btn> -->   
    </v-app-bar>
    <v-main>
      <!-- Rutas -->
      <router-view></router-view>
    </v-main>
    <v-footer app color="gray" dark>
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

<style scoped>
.custom-background {
  background-image: url('@/assets/fondo-cayambe.png');
  background-size: cover;
  min-height: 100vh;
  background-color: #f5f5f5; 
}
</style>
