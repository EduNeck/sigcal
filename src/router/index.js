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
import MapaCayambe from '@/components/visor/MapaCayambe.vue';
import BusquedaPrediosUrbanos from '@/components/urbano/BusquedaPrediosUrbanos.vue';
import FormIngresoCiudadano from '@/components/parametrizacion/FormIngresoCiudadano.vue';
import BusquedaPrediosRural from '@/components/rural/BusquedaPrediosRural.vue';
import FormVivienda from '@/components/urbano/FormVivienda.vue';
import FormViviendaRural from '@/components/rural/FormViviendaRural.vue';
import GridFichasRegistradasUrb from '@/components/urbano/reportes/GridFichasRegistradasUrb.vue';
import GridPisosRegistradosUrb from '@/components/urbano/reportes/GridPisosRegistradosUrb.vue';
import GridTenenciaUrb from '@/components/urbano/reportes/GridTenenciaUrb.vue';
import GridTenenciaPredio from '@/components/urbano/reportes/GridTenenciaPredio.vue';
import GridFrentesRegistrados from '@/components/urbano/reportes/GridFrentesRegistrados.vue';
import GridMejorasRegistradas from '@/components/urbano/reportes/GridMejorasRegistradas.vue';
import GridViviendasRegistradas from '@/components/urbano/reportes/GridViviendasRegistradas.vue';
import GridContribuyentesRegistrados from '@/components/urbano/reportes/GridContribuyentesRegistrados.vue';
import GridCiudadanos from '@/components/parametrizacion/GridCiudadanos.vue';
import FormIdentificacion from '@/components/urbano/FormIdentificacion.vue';
import FormValoresPeritajeUrbano from '@/components/valoracion/FormValoresPeritajeUrbano.vue';
import GridValSueloCalcUrb from '@/components/valoracion/GridValSueloCalcUrb.vue';
import GridValMejorasCalcUrb from '@/components/valoracion/GridValMejorasCalcUrb.vue';
import GridValPredioCalcUrb from '@/components/valoracion/GridValPredioCalcUrb.vue';
import GridValValoracionUrb from '@/components/valoracion/GridValValoracionUrb.vue';
import FormTipologia from '@/components/valoracion/FormTipologia.vue';
import GridTipologiaUrb from '@/components/valoracion/GridTipologiaUrb.vue';
import FormFactorTamanioUrb from '@/components/valoracion/FormFactorTamanioUrb.vue';
import GridFactorTamanioUrb from '@/components/valoracion/GridFactorTamanioUrb.vue';
import FormFittoCorvini from '@/components/valoracion/FormFittoCorvini.vue';
import GridFittoCorvini from '@/components/valoracion/GridFittoCorvini.vue';


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
    path: '/form-identificacion',
    name: 'FormIdentificacion',
    component: FormIdentificacion, 
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

  {
    path: '/form-vivienda',
    name: 'FormVivienda',
    component: FormVivienda, 
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

  {
    path: '/form-vivienda-rural',
    name: 'FormViviendaRural',
    component: FormViviendaRural, 
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

  {
    path: '/valora-peritaje_urb',
    name: 'PeritajeUrbano',
    component: FormValoresPeritajeUrbano,

  },

  {
    path: '/val-suelo-cal-urb',
    name: 'ValSueloCalUrb',
    component: GridValSueloCalcUrb,
  },

  {
    path: '/val-mejoras-cal-urb',
    name: 'ValMejorasCalUrb',
    component: GridValMejorasCalcUrb,
  },

  {
    path: '/val-predio-cal-urb',
    name: 'ValPredioCalUrb',
    component: GridValPredioCalcUrb,
  },

  {
    path: '/valores-peritaje_urb',
    name: 'ValPatrimonioUrb',
    component: GridValValoracionUrb,
  },

  {
    path: '/tipologia-urbana',
    name: 'TipologiaUrbana',
    component: FormTipologia,
  },

  {
    path: '/grid-tipologia-urbana',
    name: 'GridTipologiaUrbana',
    component: GridTipologiaUrb,
  },

  {
    path: '/form-factor-tamanio-urb',
    name: 'FormFatorTamanioUrb',
    component: FormFactorTamanioUrb,
  },

  {
    path: '/grid-factor-tamanio-urb',
    name: 'GridFactorTamanioUrb',
    component: GridFactorTamanioUrb,
  },

  {
    path: '/form-fitto-corvini',
    name: 'FormFittoCorvini',
    component: FormFittoCorvini,
  },

  {
    path: '/grid-fitto-corvini',
    name: 'GridFittoCorvini',
    component: GridFittoCorvini,
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

  /* Visor */
  {
    path: '/visor',
    name: 'Visor',
    component: MapaCayambe, 
  },

  /* Busqueda */
  {
    path: '/busqueda-urbana',
    name: 'BusquedaUrbana',
    component: BusquedaPrediosUrbanos, 
  },

  {
    path: '/busqueda-rural',
    name: 'BusquedaRural',
    component: BusquedaPrediosRural, 
  },

  /* Parametrización */
  {
    path: '/ingreso-ciudadano',
    name: 'IngresoCiudadano',
    component: FormIngresoCiudadano, 
  },

  {
    path: '/listado-ciudadano',
    name: 'ListadoCiudadano',
    component: GridCiudadanos, 
  },


  /* Reportes Urbanos */
  {
    path: '/fichas-registradas-urb',
    name: 'FichasRegistradasUrb',
    component: GridFichasRegistradasUrb, 
  },

  {
    path: '/pisos-registrados-urb',
    name: 'PisosRegistradosUrb',
    component: GridPisosRegistradosUrb, 
  },

  {
    path: '/tenencia-urb',
    name: 'TenenciaUrb',
    component: GridTenenciaUrb, 
  },

  {
    path: '/tenencia-predio-urb',
    name: 'TenenciaPredioUrb',
    component: GridTenenciaPredio, 
  },

  {
    path: '/frentes-registrados',
    name: 'FrentesRegistrados',
    component: GridFrentesRegistrados, 
  },

  {
    path: '/mejoras-registradas',
    name: 'MejorasRegistradas',
    component: GridMejorasRegistradas, 
  },

  {
    path: '/vivienda-registrada',
    name: 'ViviendaRegistrada',
    component: GridViviendasRegistradas, 
  },

  {
    path: '/contribuyentes-registrados',
    name: 'ContribuyenteRegistrado',
    component: GridContribuyentesRegistrados, 
  },

];

export default new Router({
  mode: 'history', 
  routes,
});
