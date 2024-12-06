<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title>AÑADIR CAPAS</v-card-title>
          <v-card-actions>
            <v-btn icon @click="addLayer">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn icon @click="removeLayer">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-text>
            <v-card-title>CAPAS</v-card-title>
            <v-checkbox
              v-model="capas.manzana"
              label="Manzana"
              @change="toggleLayer('manzana')"
            ></v-checkbox>
            <v-checkbox
              v-model="capas.predios"
              label="Predios"
              @change="toggleLayer('predios')"
            ></v-checkbox>
            <v-checkbox
              v-model="capas.bloques"
              label="Bloques"
              @change="toggleLayer('bloques')"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="9">
        <v-card class="mx-auto" max-width="900">
          <v-card-title class="d-flex justify-center"><h3>Visor Geográfico</h3>
          </v-card-title>
          <v-card-text>
            <l-map
              :zoom="zoom"
              :center="center"
              style="height: 600px; width: 100%;"
            >
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="center"></l-marker>
              <!-- Capas dinámicas -->
              <l-layer-group v-if="capas.manzana">
                <!-- Ejemplo de capa de manzana -->
              </l-layer-group>
              <l-layer-group v-if="capas.predios">
                <!-- Ejemplo de capa de predios -->
              </l-layer-group>
              <l-layer-group v-if="capas.bloques">
                <!-- Ejemplo de capa de bloques -->
              </l-layer-group>
            </l-map>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" @click="navigateToMenu">Salir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker, LLayerGroup } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapaCayambe',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LLayerGroup,
  },
  data() {
    return {
      zoom: 13,
      center: [0.0407, -78.1435],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tipo: this.$route.query.tipo, // Obtener el parámetro 'tipo' de la URL
      capas: {
        manzana: false,
        predios: false,
        bloques: false,
      }
    }
  },
  methods: {
    navigateToMenu() {
      if (this.tipo === 'urbano') {
        this.$router.push('/menu-urbano');
      } else if (this.tipo === 'rural') {
        this.$router.push('/menu-rural');
      }
    },
    toggleLayer(layer) {
      this.capas[layer] = !this.capas[layer];
    },
    addLayer() {
      // Lógica para añadir una nueva capa
      console.log('Añadir capa');
    },
    removeLayer() {
      // Lógica para eliminar una capa
      console.log('Eliminar capa');
    }
  }
}
</script>
