<template>
    <v-container>
      <v-tabs  v-model="activeTab" background-color="primary" dark centered grow show-arrows>
        <v-tab v-for="(tab, index) in tabs" :key="index">
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
  import Identificacion from './FormIdentificacion.vue';
  import Legal from './FormTenencias.vue';
  import Caracteristicas from './FormCaracteristicas.vue';
  import Vias from './FormVias.vue';
  import Construccion from './FormBloques.vue';
  import Obras from './FormObrasMejoras.vue';
  import Observaciones from './FormObservaciones.vue';
  import FotoFachada from './FormFotoFachada.vue';
  
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
          { label: 'Foto Fachada', component: FotoFachada },
        ]
      };
    }
  };
  </script>
  