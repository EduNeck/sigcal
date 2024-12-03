import Vue from 'vue';
import Router from 'vue-router';
import MenuIngreso from '@/components/MenuIngreso.vue'; 
import LoginSistema from '@/components/LoginSistema.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import FormTenecias from '@/components/urbano/FormTenencias.vue';
import FormBloques from '@/components/urbano/FormBloques.vue';
import FormCaracteristicas from '@/components/urbano/FormCaracteristicas.vue';
import FormFotoFachada from '@/components/urbano/FormFotoFachada.vue';
import FormObrasMejoras from '@/components/urbano/FormObrasMejoras.vue';
import FormObservaciones from '@/components/urbano/FormObservaciones.vue';
import FormVias from '@/components/urbano/FormVias.vue';
import NavegacionPredios from '@/components/urbano/NavegacionPredios.vue';
import MenuRural from '@/components/MenuRural.vue';
import FormTenenciasRural from '@/components/rural/FormTenenciasRural.vue';
import FormBloquesRural from '@/components/rural/FormBloquesRural.vue';
import FormCaracteristicasRural from '@/components/rural/FormCaracteristicasRural.vue';
import FormFotoFachadaRural from '@/components/rural/FormFotoFachadaRural.vue';
import FormObrasMejorasRural from '@/components/rural/FormObrasMejorasRural.vue';
import FormObservacionesRural from '@/components/rural/FormObservacionesRural.vue';
import FormViasRural from '@/components/rural/FormViasRural.vue';
import NavegacionPrediosRural from '@/components/rural/NavegacionPrediosRural.vue';
import ValoracionUrbana from '@/components/valoracion/ValoracionUrbana.vue';
import ValoracionRural from '@/components/valoracion/ValoracionRural.vue';
import FormGestionDocumental from '@/components/urbano/FormGestionDocumental.vue';
import FormGestionDocumentalRural from '@/components/rural/FormGestionDocumentalRural.vue';
import GridListadoUrbano from '@/components/urbano/GridListadoUrbano.vue';
import GridListadoRural from '@/components/rural/GridListadoRural.vue';


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'LoginSistema',
    component: LoginSistema, // Apunta al componente principal o una pantalla inicial
  },

  {
    path: '/menu-ingreso',
    name: 'MenuIngreso',
    component: MenuIngreso, 
  },

  /* Menus Sistema */
  {
    path: '/menu-urbano',
    name: 'MenuUrbano',
    component: MenuUrbano, 
  },

  {
    path: '/menu-rural',
    name: 'MenuRural',
    component: MenuRural, 
  },

  {
    path: '/navegacion-predios',
    name: 'NavegacionPredios',
    component: NavegacionPredios, 
  },

  {
    path: '/navegacion-predios-rurales',
    name: 'NavegacionPrediosRurales',
    component: NavegacionPrediosRural, 
  },

  /* Urbano Catastro */
  {
    path: '/form-tenencia',
    name: 'FormTenencias',
    component: FormTenecias, 
  },

  {
    path: '/form-bloques',
    name: 'FormBloques',
    component: FormBloques, 
  },

  {
    path: '/form-caracteristicas',
    name: 'FormCaracteristicas',
    component: FormCaracteristicas, 
  },

  {
    path: '/form-foto',
    name: 'FormFotoFachada',
    component: FormFotoFachada, 
  },

  {
    path: '/form-obras',
    name: 'FormObras',
    component: FormObrasMejoras, 
  },

  {
    path: '/form-observaciones',
    name: 'FormObservaciones',
    component: FormObservaciones, 
  },

  {
    path: '/form-vias',
    name: 'FormVias',
    component: FormVias, 
  },

  /* Rural Catastro */
  {
    path: '/form-tenencia-ru',
    name: 'FormTenenciasRural',
    component: FormTenenciasRural, 
  },

  {
    path: '/form-bloques-ru',
    name: 'FormBloquesRural',
    component: FormBloquesRural, 
  },

  {
    path: '/form-caracteristicas-ru',
    name: 'FormCaracteristicasRural',
    component: FormCaracteristicasRural, 
  },

  {
    path: '/form-foto-ru',
    name: 'FormFotoFachadaRural',
    component: FormFotoFachadaRural, 
  },

  {
    path: '/form-obras-ru',
    name: 'FormObrasRural',
    component: FormObrasMejorasRural, 
  },

  {
    path: '/form-observaciones-ru',
    name: 'FormObservacionesRural',
    component: FormObservacionesRural, 
  },

  {
    path: '/form-vias-ru',
    name: 'FormViasRural',
    component: FormViasRural, 
  },

  /* Valoración */ 
  {
    path: '/valora-urbana',
    name: 'ValoracionUrbana',
    component: ValoracionUrbana, 
  },

  {
    path: '/valora-rural',
    name: 'ValoracionRural',
    component: ValoracionRural, 
  },

  /* Listado Predios */
  {
    path: '/grid-listado-urbano',
    name: 'ListadoUrbano',
    component: GridListadoUrbano, 
  },

  {
    path: '/grid-listado-rural',
    name: 'ListadoRural',
    component: GridListadoRural, 
  },


  /* Gestion Documental */
  {
    path: '/gestion-doc-urbana',
    name: 'GestionDocUrbana',
    component: FormGestionDocumental, 
  },

  {
    path: '/gestion-doc-rural',
    name: 'GestionDocRural',
    component: FormGestionDocumentalRural, 
  },


];

export default new Router({
  mode: 'history', 
  routes,
});
