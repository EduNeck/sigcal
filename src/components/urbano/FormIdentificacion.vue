<template>
  <v-container class="container">
    <v-row justify="center" class="mb-1">
      <v-col cols="auto" class="d-flex justify-center"> 
        <v-btn color=#114358 class="mx-2 custom-text-color">Nuevo</v-btn>
        <v-btn color=#114358 @click="guardar" class="mx-2 custom-text-color">Guardar</v-btn>
        <v-btn color=#114358 class="mx-2 custom-text-color">Imprimir Ficha</v-btn>
        <v-btn color=#114358 class="mx-2 custom-text-color">Documentos</v-btn>
        <v-btn color=#114358 class="mx-2 custom-text-color">Valorar</v-btn>
        <v-btn color=#114358 @click="navigateToMenuUrbano" class="mx-2 custom-text-color">Salir</v-btn>
      </v-col>
    </v-row>          
    <!-- Primer Bloque -->
    <v-card class="mb-3 block-color-imagen fill-width" > 
      <v-card-title class="centered-title"></v-card-title> 
      <v-card-text> 
        <v-row align="center" justify="center">           

          <v-card> <v-card-title class="image-title">FOTO DEL PREDIO</v-card-title> 
            <v-img :src="require('@/assets/foto-predio.png')" class="my-image fill-height" max-width="300%" max-height="400px"></v-img>
          </v-card>          
          <v-card> <v-card-title class="image-title">MAPA DEL PREDIO</v-card-title> 
            <v-img :src="require('@/assets/croquis-predio.png')" class="my-image fill-height" max-width="300%" max-height="400px"></v-img>
          </v-card>         

          </v-row> 
        </v-card-text> 
      </v-card>

    <v-card class="mb-3 block-color fill-width">
      <v-card-title class="centered-title">IDENTIFICACIÓN</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-select 
              label="Tipo Predio" v-model="form.id_tipo_predio" :items="tipoPredios" 
              item-text="descripcion" item-value="id" required color="#F2AA1F" >
            </v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              label="Regimen de Propiedad" 
              v-model="form.id_regimen_propiedad" :items="regimens" item-text="descripcion" 
              item-value="id" 
              required color="#F2AA1F" @change="handleRegimenChange">
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Clave Catastral Anterior" color = #F2AA1F
              v-model="form.clave_catastral_anterior">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Clave Catastral" color = #F2AA1F
              v-model="form.clave_catastral" disabled>
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Segundo Bloque -->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">CLAVE CATASTRAL</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2" class="bold-text large-text">         
              Provincia Pichincha: {{ form.id_prov }}            
          </v-col>
          <v-col cols="12" sm="6" md="2" class="bold-text large-text">           
              Cantón Cayambe: {{ form.id_can }}            
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              label="Parroquia" v-model="form.id_par" :items="formattedParroquias"
              item-text="descripcion" item-value="dpa" required @input="updateClaveCatastral">
            </v-select>
          </v-col>

          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Zona"
              color="#F2AA1F"
              v-model="form.cod_zon"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 9 || 'Debe ser un número entre 1 y 9']"
              maxlength="1" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 1)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Sector"
              color="#F2AA1F"
              v-model="form.cod_sec"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 9 || 'Debe ser un número entre 1 y 9']"
              maxlength="1" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 1)">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Pol/Manzana"
              color="#F2AA1F"
              v-model="form.cod_pol_man"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 999 || 'Debe ser un número entre 1 y 999']"
              maxlength="3" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 3)">
            </v-text-field>
          </v-col>          
          <v-col cols="12" sm="6" md="1" >
            <v-text-field
              label="Predio"
              color="#F2AA1F"
              v-model="form.cod_pred"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 999 || 'Debe ser un número entre 1 y 999']"
              maxlength="3" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 3)">
            </v-text-field>
          </v-col> 
      </v-row> 
      </v-card-text> 
    </v-card>

    
    <v-card class="mb-3 block-color fill-width" v-if="form.id_regimen_propiedad === 4">
      <v-card-title class="centered-title">PROPIEDAD HORIZONTAL</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Unidad" 
                color="#F2AA1F" 
                v-model="form.cod_uni"               
                type="number"
                :rules="[v => !!v && v >= 0 && v <= 999 || 'Debe ser un número entre 0 y 999']"
                maxlength="3"
                @input="updateClaveCatastral"></v-text-field> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Bloque" 
                color="#F2AA1F" 
                v-model="form.cod_bloq"
                type="number"
                :rules = "[v => !!v && v >= 0 && v <= 999 || 'Debe ser un número entre 0 y 999']"
                maxlength="3"
                @input="updateClaveCatastral"></v-text-field> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-select
              label="Tipo de Piso" v-model="form.id_tipo_piso" :items="tipoPisos" 
              item-text="descripcion" item-value="id" required color="#F2AA1F" 
              @input="updateClaveCatastral">
            </v-select> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Piso" 
                color="#F2AA1F" 
                v-model="form.cod_piso"
                type="number"
                :rules = "[v => !!v && v >= 0 && v <= 99 || 'Debe ser un número entre 0 y 99']"
                maxlength="2"
                @input="updateClaveCatastral"></v-text-field> 
          </v-col>        
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color fill-width" v-if="form.id_regimen_propiedad === 4">
      <v-card-title class="centered-title">ÁREAS</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Alicuota" 
             color = #F2AA1F 
             v-model="form.alicuota" 
             type="number"
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área de Terreno" 
             color = #F2AA1F 
             v-model="form.area_terreno" 
             type="number" 
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común de Terreno" 
             color = #F2AA1F 
             v-model="form.area_comun_terreno" 
             type="number"
              >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="unidadAreas"
              label="Unidad de Área" 
              v-model="form.id_unidad_area" 
              item-text="descripcion" 
              item-value="id" 
              required color="#F2AA1F"
            ></v-select>
          </v-col>          
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Individual Construida" 
             color = #F2AA1F 
             v-model="form.area_individual_construida" 
             type="number"
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común Construida" 
             color = #F2AA1F 
             v-model="form.area_comun_construida" 
             type="number"
             >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>  

     <!-- Cuarto Bloque -->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">EJES VIALES</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Eje Principal" color = #F2AA1F v-model="form.eje_principal"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Eje Secundario" color = #F2AA1F v-model="form.eje_secundario"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Sector" color = #F2AA1F v-model="form.sector"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Área Gráfica" 
             color = #F2AA1F 
             v-model="form.area_grafica" 
             type="number"
             @input="formatDecimal('area_grafica')">
            </v-text-field>
          </v-col>          
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Botón -->    
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn class="custom-text-color" color=#114358 @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>     

  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  // Nombre del componente
  name: 'FormIdentificacion',
  //  Datos del componente
  data() {
    // Datos del formulario
    return {      
      form: {
        id_tipo_predio: '',
        id_regimen_propiedad: '',
        clave_catastral_anterior: '',
        clave_catastral: '',
        id_prov: '17',
        id_can: '1702',
        id_par: '',
        cod_zon: '',
        cod_sec: '',
        cod_pol_man: '',
        cod_pred: '',
        cod_uni: '',
        cod_bloq: '', 
        id_tipo_piso: '',
        cod_piso: '',
        alicuota: '',
        area_terreno: '',
        area_comun_terreno: '',
        id_unidad_area: '',
        area_individual_construida: '',
        area_comun_construida: '',
        eje_principal: '',
        eje_secundario: '',
        sector: '',
        area_grafica: '',
      },
      // Catálogos
      tipoPredios: [],
      regimens: [],
      tipoPisos: [],
      unidadAreas: [],
      parroquias: [],
     };
  },
  // Métodos del componente
  methods: {
    // Obtener parroquia
    async fetchParroquia() {
      try {
        const response = await axios.get('http://localhost:3001/api/catastro_parroquia');
        return response.data;
      } catch (error) {
        console.error('Error fetching parroquia:', error);
        return [];
      }
    },
    // Obtener catálogo
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

    // Guardar formulario
    async guardar() {
      console.log('Guardando formulario:');
      
      const nuevoPredio = { 
        id_tipo_predio: this.form.id_tipo_predio, 
        id_regimen_propiedad: this.form.id_regimen_propiedad, 
        clave_catastral_anterior: this.form.clave_catastral_anterior, 
        clave_catastral: this.form.clave_catastral, 
        id_prov: this.form.id_prov, 
        id_can: this.form.id_can, 
        id_par: this.form.id_par, 
        cod_zon: this.form.cod_zon, 
        cod_sec: this.form.cod_sec,
        cod_pol_man: this.form.cod_pol_man,
        cod_pred: this.form.cod_pred,
        eje_principal: this.form.eje_principal,
        eje_secundario: this.form.eje_secundario,
        sector: this.form.sector
      };

      if (this.form.id_regimen_propiedad === 4) {
        // Si el régimen de propiedad es PROPIEDAD HORIZONTAL - PH (código 4)
        nuevoPredio.cod_uni = this.form.cod_uni;
        nuevoPredio.cod_bloq = this.form.cod_bloq;
        nuevoPredio.id_tipo_piso = this.form.id_tipo_piso;
        nuevoPredio.cod_piso = this.form.cod_piso;
        nuevoPredio.alicuota = this.form.alicuota;
        nuevoPredio.area_terreno = this.form.area_terreno;
        nuevoPredio.area_comun_terreno = this.form.area_comun_terreno;
        nuevoPredio.id_unidad_area = this.form.id_unidad_area;
        nuevoPredio.area_individual_construida = this.form.area_individual_construida;
        nuevoPredio.area_comun_construida = this.form.area_comun_construida;
      } else {
        // Si el régimen de propiedad no es PROPIEDAD HORIZONTAL - PH (código 4)
        nuevoPredio.cod_uni = 0;
        nuevoPredio.cod_bloq = 0;
        nuevoPredio.id_tipo_piso = 5;
        nuevoPredio.cod_piso = 0;
        nuevoPredio.alicuota = null;
        nuevoPredio.area_terreno = null;
        nuevoPredio.area_comun_terreno = null;
        nuevoPredio.id_unidad_area = null;
        nuevoPredio.area_individual_construida = null;
        nuevoPredio.area_comun_construida = null;
      }

      console.log('Datos a guardar:', nuevoPredio);

      try {
        const response = await axios.post('http://localhost:3001/api/catastro_predio', nuevoPredio);
        console.log('Respuesta del servidor:', response.data);
        alert('Predio guardado exitosamente');
      } catch (error) {
        console.error('Error al guardar el predio:', error);
        alert('Error al guardar el predio');
      }
    },

    // Navegar a la página de menú urbano
    navigateToMenuUrbano() {
      this.$router.push('/menu-urbano');
    },
    // Valida si el régimen de propiedad es propiedad horizontal
    handleRegimenChange() {
      if (this.form.id_regimen_propiedad !== 4) {
        this.limpiarCampos();
      }
    },

    // Limpiar Campos
    limpiarCampos() {
      this.form.alicuota = '';
      this.form.area_terreno = '';
      this.form.area_comun_terreno = '';
      this.form.id_unidad_area = '';
      this.form.area_individual_construida = '';
      this.form.area_comun_construida = '';
      this.form.cod_pred = '';
      this.form.cod_uni = '';
      this.form.cod_bloq = '';
      this.form.id_tipo_piso = '';
      this.form.cod_piso = '';
      this.form.eje_principal = '';
      this.form.eje_secundario = '';
      this.form.sector = '';
    },

    // Limitar dígitos
    limitDigits(event, maxDigits) {
      const input = event.target;
      if (input.value.length >= maxDigits) {
        event.preventDefault();
      }
    },

    // Actualizar clave catastral
    updateClaveCatastral() {
    const { id_par, cod_zon, cod_sec, cod_pol_man, cod_pred, id_regimen_propiedad, cod_uni, cod_bloq, id_tipo_piso, cod_piso } = this.form;

    // Asegurarse de que los campos manzana y predio sean de 3 dígitos
    const formattedCodPolMan = cod_pol_man ? cod_pol_man.padStart(3, '0') : '';
    const formattedCodPred = cod_pred ? cod_pred.padStart(3, '0') : '';

    if (id_regimen_propiedad !== 4) {
      // Si el régimen de propiedad no es PROPIEDAD HORIZONTAL - PH (código 4)
      this.form.clave_catastral = `${id_par}${cod_zon}${cod_sec}${formattedCodPolMan}${formattedCodPred}000000P00`;
    } else {
      // Si el régimen de propiedad es PROPIEDAD HORIZONTAL - PH (código 4)
      const formattedCodUni = cod_uni ? cod_uni.padStart(3, '0') : '';
      const formattedCodBloq = cod_bloq ? cod_bloq.padStart(3, '0') : '';
      let formattedCodPiso = cod_piso ? cod_piso.padStart(2, '0') : '';

      if (id_tipo_piso === 5) {
        // Si el tipo de piso es PISO (código 5)
        formattedCodPiso = `P${formattedCodPiso}`;
      } else if (id_tipo_piso === 6) {
        // Si el tipo de piso es SUBSUELO (código 6)
        formattedCodPiso = `S${formattedCodPiso}`;
      }

      this.form.clave_catastral = `${id_par}${cod_zon}${cod_sec}${formattedCodPolMan}${formattedCodPred}${formattedCodUni}${formattedCodBloq}${formattedCodPiso}`;
    }
  },

  }, // Fin de métodos

  // Cancatenar descripción de parroquia
  computed: {
    formattedParroquias() {
      return this.parroquias.map(parroquia => ({
        ...parroquia,
        descripcion: `${parroquia.dpa} - ${parroquia.descripcion}`
      }));
    }
  },
  // Cargar
  async mounted() {
    // Cargar catálogos
    try {
      console.log('Componente montado');
      this.tipoPredios = await this.fetchCatalogo(1); // Obtén los datos para el tipo de persona
      this.regimens = await this.fetchCatalogo(2); // Obtén los datos para el tipo de persona
      this.tipoPisos = await this.fetchCatalogo(3); // Obtén los datos para el tipo de persona
      this.unidadAreas = await this.fetchCatalogo(8); // Obtén los datos para el tipo de area
      this.parroquias = await this.fetchParroquia(); // Obtén los datos para el tipo de persona
      console.log('Datos del catálogo cargados:', this.tipoPredios, this.regimens, this.tipoPisos);
      console.log('Datos de parroquias cargados:', this.parroquias);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }
    // Cargar parroquias
    try {
      console.log('Componente montado');
      this.parroquias = await this.fetchParroquia(); 
      console.log('Datos de parroquias cargados:', this.parroquias);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }
  },


};
</script>

<style scoped>
.container {
  background-color: #276E90; /* Fondo */
  border: 0; /* Borde personalizado */
  padding: 0; /* Eliminar padding */
  margin: 0; /* Eliminar margen */
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
}

.block-color-imagen {
  background-color: #114358;
  color: #114358; 
}

.custom-text-color {
  color: #F1ECE7; 
}

.vertical-divider { 
  height: 30px; /* Altura de la línea */ 
  align-self: center; 
  margin: 0 16px; /* Espaciado a los lados de la línea */ 
  border-left: 2px solid #114358;
}

.centered-title { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  text-align: center;
}

.fill-width { 
  width: 100%; 
}

.my-image { 
  max-width: 100%; 
  border: 1px solid #F2AA1F; 
  border-radius: 2px; 
} 

.image-title { 
  text-align: center; 
  font-size: 16px; 
  margin-bottom: 2px;
  color: #F1ECE7;
  justify-content: center; 
  background-color: #276E90;
  display: flex;
}

.bold-text {
  font-weight: bold;
}

.large-text {
  font-size: 1.2em; /* Ajusta el tamaño de letra según tus necesidades */
}
</style>
