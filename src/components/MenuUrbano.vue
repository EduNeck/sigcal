<template>
  <v-container class=" d-flex justify-center fondo-menu">
    <v-row align="center" justify="center" class="menu-container">
      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on" @click="navigateToVisor('urbano')">
              Visor
            </v-btn>
          </template>
        </v-menu>
      </v-col>

      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on">
              Gestión Catastral
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/navegacion-predios')">
              <v-list-item-title>Ingreso Predio</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/busqueda-urbana')">
              <v-list-item-title>Busqueda Predial</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/grid-listado-urbano')">
              <v-list-item-title>Listado Predial</v-list-item-title>
            </v-list-item>              
            <v-list-item @click="$router.push('/gestion-doc-urbana')">
              <v-list-item-title>Gestion Documental</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on">
              Reportes
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/fichas-registradas-urb')">
              <v-list-item-title>Fichas Registradas</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/pisos-registrados-urb')">
              <v-list-item-title>Pisos Registrados</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/tenencia-urb')">
              <v-list-item-title>Registros de Tenecia Activos</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/tenencia-predio-urb')">
              <v-list-item-title>Certificado de Tenecia Predios</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/frentes-registrados')">
              <v-list-item-title>Vias / Frentes Registrados</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/mejoras-registradas')">
              <v-list-item-title>Mejoras Registradas</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/vivienda-registrada')">
              <v-list-item-title>Viviendas Registradas</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/contribuyentes-registrados')">
              <v-list-item-title>Contribuyentes Registrados</v-list-item-title>
            </v-list-item>                                                                                  
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on">
              Valoración
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/valora-urbana')">
              <v-list-item-title>Genera Valoración</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/busqueda-urbana')">
              <v-list-item-title>Certificado Catastral</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/valora-peritaje_urb')">
              <v-list-item-title>Valores Comerciales o de Peritaje</v-list-item-title>
            </v-list-item>              
            <v-list-item @click="$router.push('/val-suelo-cal-urb')">
              <v-list-item-title>Valoración Suelo Factores</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/val-mejoras-cal-urb')">
              <v-list-item-title>Valoración Mejoras Obras</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/val-predio-cal-urb')">
              <v-list-item-title>Valoración Predio Resultado</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/valores-peritaje-urb')">
              <v-list-item-title>Valoración - Patrimonio</v-list-item-title>
            </v-list-item>     
            <v-list-item @click="$router.push('/grid-tipologia-urbana')">
              <v-list-item-title>Listado Tipología</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/tipologia-urbana')">
              <v-list-item-title>Ingreso Tipologia</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/grid-factor-tamanio-urb')">
              <v-list-item-title>Listado Factor Tamaño</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/form-factor-tamanio-urb')">
              <v-list-item-title>Ingreso Factor Tamaño</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/grid-fitto-corvini')">
              <v-list-item-title>Listado Fitto Corvini</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/form-fitto-corvini')">
              <v-list-item-title>Ingreso Fitto Corvini</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on">
              Parametrización
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-bind="attrs" v-on="on" @click="navigateToMenu('urbano')">
              <v-list-item-title>Gestión Ciudadano</v-list-item-title>
            </v-list-item>
            
            <v-list-item @click="$router.push('/listado-ciudadano')">
              <v-list-item-title>Listado Ciudadano</v-list-item-title>
            </v-list-item>          
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color=#276E90 class="custom-text-color" v-bind="attrs" v-on="on" @click="navigateToMenuIngreso()">
              Salir
            </v-btn>
          </template>
        </v-menu>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MenuUrbano',
  methods: {
    navigateToVisor(tipo) {
      this.$router.push({ path: '/visor', query: { tipo: tipo } });
    },
    navigateToMenu(tipo) {
      this.$router.push({ path: '/ingreso-ciudadano', query: { tipo: tipo } });
    },
    navigateToMenuIngreso() {
      const tipo = this.$route.query.tipo;
      if (tipo === 'urbano') {
        this.$router.push('/menu-urbano');
      } else if (tipo === 'rural') {
        this.$router.push('/menu-rural');
      } else {
        this.$router.push('/menu-ingreso'); // Fallback en caso de que no se especifique el tipo
      }
    }
  }
}
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.fondo-menu {
  background-color: #0A3143;
}

.custom-text-color {
  color: #F1ECE7; /* Color de letras personalizado */
}

</style>