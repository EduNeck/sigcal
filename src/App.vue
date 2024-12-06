<template>
  <v-app class="custom-background">
    <v-app-bar app color="gray" dark class="custom-app-bar">
      <v-img
        src="@/assets/logo.png"
        contain
        height="60"
        width="120"
        class="mr-3 logo"
      ></v-img>
      <v-toolbar-title class="toolbar-title">
        GADM Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe
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

.custom-app-bar {
  width: 100%; /* Ocupa todo el ancho de la pantalla */
  height: 10px; /* Ajusta esto según tus necesidades */
  display: flex;
  align-items: center; /* Alinea el contenido verticalmente */
}

.toolbar-title {
  font-size: 30px;
  color: white;
  line-height: 50px; /* Ajusta esto según la altura de la app-bar */
}

.logo {
  width: 60px; /* Ajusta esto según tus necesidades */
}
</style>