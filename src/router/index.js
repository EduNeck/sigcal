import Vue from 'vue';
import Router from 'vue-router';
import MenuIngreso from '@/components/MenuIngreso.vue'; 
import LoginSistema from '@/components/LoginSistema.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import FormPredios from '@/components/urbano/FormPredios.vue';

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

];

export default new Router({
  mode: 'history', 
  routes,
});
