<template>
  <v-container>
    <v-card class="mx-auto block-color">
      <v-card-title class="d-flex justify-center">
        <h3>Formulario de Ingreso de Ciudadano</h3>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <!-- Campos del formulario -->
            <v-col cols="12" sm="4">
              <v-select
                label="Tipo de Persona"
                v-model="id_tipo_persona"
                :items="tipoPersonas"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                label="Personería"
                v-model="id_personeria"
                :items="personerias"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Apellidos"
                v-model="apellido_primario"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Nombres"
                v-model="nombre_principal"
                required
              ></v-text-field>
            </v-col>            
            <v-col cols="12" sm="4">
              <v-select
                label="Tipo de Documento"
                v-model="id_tipo_documento"
                :items="documentos"
                item-text="descripcion"
                item-value="id"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Número de Documento"
                v-model="numero_documento"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                label="Estado Civil"
                v-model="id_estado_civil"
                :items="estadosCiviles"
                item-text="descripcion"
                item-value="id"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Teléfono"
                v-model="telefono"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4"> 
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
            <v-col cols="12" sm="4">
              <v-text-field
                label="Correo"
                v-model="email"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                label="Dirección"
                v-model="direccion"
              ></v-text-field>
            </v-col>
           </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="guardar" :disabled="id_ciudadano !== null">Guardar</v-btn>
        <v-btn color="primary" @click="actualizar" :disabled="id_ciudadano === null">Actualizar</v-btn>
        <v-btn color="secondary" @click="limpiarFormulario">Limpiar</v-btn>
        <!-- <v-btn color="secondary" @click="navigateToMenu">Salir</v-btn>  -->        
        <v-btn color="secondary" class="mx-2 custom-text-color" @click="navigateBack">Regresar</v-btn>
      </v-card-actions>
    </v-card>
    <v-overlay :value="snackbar" :z-index="1000" color="rgba(0, 0, 0, 0.7)">
      <v-card class="mx-auto" max-width="400" dark>
        <v-card-text>
          {{ snackbarMessage }}
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="pink" text @click="snackbar = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-container>
</template>


<script>
import axios from 'axios';

export default {
  name: 'FormIngresoCiudadano',
  data() {
    return {
      id_ciudadano: null,
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
      tipoPersonas: [],
      personerias: [],
      documentos: [],
      estadosCiviles: [],
      menu: false,
      snackbar: false,
      snackbarMessage: ''
    };
  },
  
  // Crea el componente
  created() {
    const idCiudadano = this.$route.query.id;
    if (idCiudadano) {
      this.id_ciudadano = idCiudadano;
      this.fetchCiudadano(idCiudadano);
    }
  },
  methods: {
    // Obtiene Catalogo
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

    // Guardar datos del formulario
    async guardar() { 
      console.log('Método guardar() llamado');
      const nuevoCiudadano = {
        id_tipo_persona: this.id_tipo_persona,
        id_personeria: this.id_personeria,
        apellido_primario: this.apellido_primario,
        nombre_principal: this.nombre_principal,
        id_tipo_documento: this.id_tipo_documento,
        numero_documento: this.numero_documento,
        id_estado_civil: this.id_estado_civil,
        fecha_nacimiento: this.fecha_nacimiento,
        telefono: this.telefono,
        email: this.email,
        direccion: this.direccion
      };

      console.log('Datos del ciudadano a guardar:', nuevoCiudadano);

      try {
        const response = await axios.post('http://localhost:3001/api/catastro_ciudadano', nuevoCiudadano);
        console.log('Respuesta del servidor:', response.data);
        this.snackbarMessage = 'Datos guardados exitosamente!';
        this.snackbar = true;
        
        
      } catch (error) {
        console.error('Error al guardar los datos:', error);
        this.snackbarMessage = 'Error al guardar los datos. Inténtalo de nuevo.';
        this.snackbar = true;
      }
    },

    // Actualiza Ciudadano
    async actualizar() { 
      console.log('Método actualizar() llamado');
      const ciudadano = {
        id_tipo_persona: this.id_tipo_persona,
        id_personeria: this.id_personeria,
        apellido_primario: this.apellido_primario,
        nombre_principal: this.nombre_principal,
        id_tipo_documento: this.id_tipo_documento,
        numero_documento: this.numero_documento,
        id_estado_civil: this.id_estado_civil,
        fecha_nacimiento: this.fecha_nacimiento,
        telefono: this.telefono,
        email: this.email,
        direccion: this.direccion
      };

      console.log('Datos del ciudadano a actualizar:', ciudadano);

      try {
        const response = await axios.put(`http://localhost:3001/api/catastro_ciudadano/${this.id_ciudadano}`, ciudadano);
        console.log('Respuesta del servidor:', response.data);
        this.snackbarMessage = 'Datos actualizados exitosamente!';
        this.snackbar = true;
        //this.limpiarFormulario(); 
        // console.log('Formulario limpiado');
      } catch (error) {
        console.error('Error al actualizar los datos:', error);
        this.snackbarMessage = 'Error al actualizar los datos. Inténtalo de nuevo.';
        this.snackbar = true;
      }
    },

    // Ingresa nuevo ciudadano
    async nuevo() {
      console.log('Método nuevo() llamado');
      this.limpiarFormulario();
    },

    // Recupera Datos Ciudadano
    async fetchCiudadano(id) {
      try { 
        const response = await axios.get(`http://localhost:3001/api/catastro_ciudadano/${id}`);
        const ciudadano = response.data;
        this.id_tipo_persona = ciudadano.id_tipo_persona;
        this.id_personeria = ciudadano.id_personeria;
        this.apellido_primario = ciudadano.apellido_primario;
        this.nombre_principal = ciudadano.nombre_principal;
        this.id_tipo_documento = ciudadano.id_tipo_documento;
        this.numero_documento = ciudadano.numero_documento;
        this.id_estado_civil = ciudadano.id_estado_civil;
        this.fecha_nacimiento = ciudadano.fecha_nacimiento;
        this.telefono = ciudadano.telefono;
        this.email = ciudadano.email;
        this.direccion = ciudadano.direccion;
      } catch (error) {
        console.error('Error fetching ciudadano:', error);
      }
    },

    // Limpia formulario
    limpiarFormulario() { 
      console.log('Método limpiarFormulario() llamado');
      this.id_ciudadano = null;
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
      this.$refs.form.reset();
      console.log('Formulario reseteado');
    },

    // Navega a la pantalla anterior
    navigateBack() { 
      console.log('Regresando a la página anterior');
      this.$router.go(-1); 
    },

    // Navega al menu de ingreso
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

  // Genera los catalogos para las listas desplegables
  async mounted() { 
    try {
      console.log('Componente montado');
      this.tipoPersonas = await this.fetchCatalogo(5); // Obtén los datos para el tipo de persona
      this.personerias = await this.fetchCatalogo(6); // Obtén los datos para el personeria
      this.documentos = await this.fetchCatalogo(7); // Obtén los datos para el tipo documento
      this.estadosCiviles = await this.fetchCatalogo(4); // Obtén los datos para el estado civil
      console.log('Datos del catálogo cargados:', this.tipoPersonas, this.personerias, this.documentos, this.estadosCiviles);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }
  }
};
</script>

<style scoped>
.custom-text-color {
  color: #fff !important;
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
}

.elevation-1 {
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}

</style>
