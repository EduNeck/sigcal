<template>
    <v-container>
      <v-tabs  v-model="activeTab" centered grow class="custom-tabs">
        <v-tab v-for="(tab, index) in tabs" 
          :key="index" :class="{ 'custom-tab--active': activeTab === index }" class="custom-tab">
          {{ tab.label }}
        </v-tab>
      </v-tabs>  
      <v-tabs-items  v-model="activeTab">
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-container>
            <component :is="tab.component"></component>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </template>
  
  <script>
  import Identificacion from './FormIdentificacionRural.vue';
  import Legal from './FormTenenciasRural.vue';
  import Caracteristicas from './FormCaracteristicasRural.vue';
  import Vias from './FormViasRural.vue';
  import Construccion from './FormBloquesRural.vue';
  import Obras from './FormObrasMejorasRural.vue';
  import Observaciones from './FormObservacionesRural.vue';
  import FotoFachada from './FormFotoFachadaRural.vue';
  import Vivienda from './FormViviendaRural.vue';
  
  export default {
    name: 'NavegacionPredios',
    data() {
      return {
        activeTab: 0,
        tabs: [
          { label: 'Identificacion', component: Identificacion },
          { label: 'Legal', component: Legal },
          { label: 'Características', component: Caracteristicas },
          { label: 'Vías', component: Vias },
          { label: 'Construcción', component: Construccion },
          { label: 'Obras', component: Obras },
          { label: 'Observaciones', component: Observaciones },
          { label: 'Vivienda', component: Vivienda },
          { label: 'Foto Fachada', component: FotoFachada },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-tabs {
    background-color: #ACCC7B;/* Color de fondo de las pestañas */
    color: #F2AA1F;
  }
  
  .custom-tab {
    color: #F2AA1F; /* Color de texto de las pestañas inactivas */
    font-weight: bold;
    transition: all 0.3s ease;
    background-color: #ACCC7B; /* Fondo de las pestañas inactivas */
  }
  
  .custom-tab--active {
    color: #F1ECE7; /* Color de texto de la pestaña activa */
    font-weight: bold;
    background-color: #668A4C; /* Fondo de la pestaña activa */
  }
  </style>