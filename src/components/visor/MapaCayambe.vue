<template>
  <v-container>
    <v-card class="mx-auto" max-width="900">
      <v-card-title class="d-flex justify-center"><h3>Visor Geográfico</h3></v-card-title>
      <v-card-text>
        <l-map
          :zoom="zoom"
          :center="center"
          style="height: 600px; width: 100%;"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="center"></l-marker>
        </l-map>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="navigateToMenu">Salir</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapaCayambe',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
      center: [0.0407, -78.1435],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tipo: this.$route.query.tipo // Obtener el parámetro 'tipo' de la URL
    }
  },
  methods: {
    navigateToMenu() {
      if (this.tipo === 'urbano') {
        this.$router.push('/menu-urbano');
      } else if (this.tipo === 'rural') {
        this.$router.push('/menu-rural');
      }
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
