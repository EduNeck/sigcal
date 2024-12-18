<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="d-flex justify-center">
        <h3>Ingreso de Ciudadano</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                label="Tipo de Persona"
                v-model="id_tipo_persona"
                :items="tipoPersonas"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                label="Personería"
                v-model="id_personeria"
                :items="personerias"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Apellidos"
                v-model="apellido_primario"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Nombres"
                v-model="nombre_principal"
                required
              ></v-text-field>
            </v-col>            
            <v-col cols="12" sm="6">
              <v-select
                label="Tipo de Documento"
                v-model="id_tipo_documento"
                :items="documentos"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Número de Documento"
                v-model="numero_documento"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                label="Estado Civil"
                v-model="id_estado_civil"
                :items="estadosCiviles"
                item-text="descripcion"
                item-value="id"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Teléfono"
                v-model="telefono"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6"> 
              <v-menu ref="menu" 
                v-model="menu" :close-on-content-click="false" 
                :nudge-right="40" 
                transition="scale-transition" 
                offset-y min-width="auto" > 
                <template v-slot:activator="{ on, attrs }"> 
                  <v-text-field 
                  v-model="fecha_nacimiento" 
                  label="Fecha Nac." 
                  prepend-icon="mdi-calendar" 
                  readonly v-bind="attrs" v-on="on" >
                </v-text-field>
               </template> 
               <v-date-picker 
                v-model="fecha_nacimiento" 
                @input="menu = false">
               </v-date-picker> 
              </v-menu> 
            </v-col>        
            <v-col cols="12" sm="6">
              <v-text-field
                label="Correo"
                v-model="email"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Dirección"
                v-model="direccion"
              ></v-text-field>
            </v-col>
           </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="nuevo">Nuevo</v-btn>
        <v-btn color="primary" @click="guardar">Guardar</v-btn>
        <v-btn color="secondary" @click="limpiarFormulario">Limpiar</v-btn>
        <v-btn color="secondary" @click="navigateToMenu">Salir</v-btn>
        <v-btn color="secondary" class="mx-2 custom-text-color" @click="navigateBack">Regresar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormIngresoCiudadano',
  data() {
    return {
      id_tipo_persona: '',
      id_personeria: '',
      apellido_primario: '',
      nombre_principal: '',
      id_tipo_documento: '',
      numero_documento: '',
      id_estado_civil: '',
      fecha_nacimiento: '',
      telefono: '',
      email: '',
      direccion: '',
      tipoPersonas: [], // Lista para el tipo de persona
      personerias: [], // Lista para la personería
      documentos: [], // Lista para los tipos de documentos
      estadosCiviles: [] // Lista para los estados civiles
    };
  },
  methods: {
    async fetchCatalogo(id_tipo_atributo) {
      try {
        const response = await axios.get('http://localhost:3001/api/catalogo', {
          params: { id_tipo_atributo }
        });
        console.log(`Datos obtenidos para id_tipo_atributo ${id_tipo_atributo}:`, response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching catalogo:', error);
        throw new Error('No se pudo obtener el catálogo');
      }
    },
    async nuevo() {
      console.log('Método nuevo() llamado');
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      console.log('Método limpiarFormulario() llamado');
      this.id_tipo_persona = '';
      this.id_personeria = '';
      this.apellido_primario = '';
      this.nombre_principal = '';
      this.id_tipo_documento = '';
      this.numero_documento = '';
      this.id_estado_civil = '';
      this.fecha_nacimiento = '';
      this.telefono = '';
      this.email = '';
      this.direccion = '';
      this.$refs.form.reset(); // Restablecer el formulario de Vuetify
      console.log('Formulario reseteado');
    },

    navigateBack() { 
      console.log('Regresando a la página anterior');
      this.$router.go(-1); 
    },

    navigateToMenu() {
      const tipo = this.$route.query.tipo; 
      console.log('Navegando a menú de tipo:', tipo);
      if (tipo === 'urbano') {
        this.$router.push('/menu-urbano');
      } else if (tipo === 'rural') {
        this.$router.push('/menu-rural');
      } else {
        this.$router.push('/menu-ingreso'); 
      }
    },
  },
  async mounted() {
    try {
      console.log('Componente montado');
      this.tipoPersonas = await this.fetchCatalogo(5); // Obtén los datos para el tipo de persona
      this.personerias = await this.fetchCatalogo(6); // Obtén los datos para el personeria
      this.documentos = await this.fetchCatalogo(7); // Obtén los datos para el tipo documento
      this.estadosCiviles = await this.fetchCatalogo(4); // Obtén los datos para el estado civil
      console.log('tipoPersonas cargados:', this.tipoPersonas);
      console.log('tipoPersonas cargados:', this.personerias);
      console.log('tipoPersonas cargados:', this.documentos);
      console.log('tipoPersonas cargados:', this.estadosCiviles);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }
    console.log('Datos del catálogo cargados');
  },
};
</script>

<style scoped>
.custom-text-color {
  color: #fff !important;
}
</style>
