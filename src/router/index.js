import Vue from 'vue';
import Router from 'vue-router';
import MenuIngreso from '@/components/MenuIngreso.vue'; 
import LoginSistema from '@/components/LoginSistema.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import FormPredios from '@/components/urbano/FormPredios.vue';
import FormTenecias from '@/components/urbano/FormTenencias.vue';
import FormBloques from '@/components/urbano/FormBloques.vue';
import FormCaracteristicas from '@/components/urbano/FormCaracteristicas.vue';
import FormFotoFachada from '@/components/urbano/FormFotoFachada.vue';
import FormObrasMejoras from '@/components/urbano/FormObrasMejoras.vue';
import FormObservaciones from '@/components/urbano/FormObservaciones.vue';
import FormVias from '@/components/urbano/FormVias.vue';

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

  {
    path: '/menu-urbano',
    name: 'MenuUrbano',
    component: MenuUrbano, 
  },

  {
    path: '/form-predios',
    name: 'FormPredios',
    component: FormPredios, 
  },

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

];

export default new Router({
  mode: 'history', 
  routes,
});
