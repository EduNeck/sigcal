<template>  
  <v-container class="container">    
      <v-row justify="center" class="mb-1">
        <v-col cols="auto" class="d-flex justify-center"> 
          <v-btn color=#668A4C style="color: white;" @click="submitForm" class="mx-2">Guardar</v-btn> 
          <v-btn color=#668A4C style="color: white;" @click="navigateToMenuRural" class="mx-2">Salir</v-btn>
        </v-col>
      </v-row>        
      <!-- Primer Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title class="centered-title">IDENTIFICACIÓN</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-select 
                :items="tipoPredios" 
                label="Tipo de Predio" 
                v-model="form.id_tipo_predio" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="regimenPropiedad" 
                label="Régimen de Propiedad" 
                v-model="form.id_regimen_propiedad" 
                item-text="name" 
                item-value="value"
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Clave Catastral Anterior" 
                v-model="form.clave_catastral_anterior"
                color = #F2AA1F>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Clave Catastral" 
                v-model="form.clave_catastral"
                color = #F2AA1F>
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Segundo Bloque -->
      <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">CLAVE CATASTRAL - PROPIEDAD HORIZONTAL</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Provincia" color = #F2AA1F v-model="form.id_prov"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Cantón" color = #F2AA1F v-model="form.id_can"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Parroquia" color = #F2AA1F v-model="form.id_par"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Zona" color = #F2AA1F v-model="form.cod_zon"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Sector" color = #F2AA1F v-model="form.cod_sec"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field label="Pol/Manzana" color = #F2AA1F v-model="form.cod_pol_man"></v-text-field>
          </v-col>
          <!-- Línea Vertical --> 
          <v-divider class="vertical-divider" vertical></v-divider>
          <!-- Campos a ocultar/mostrar --> 
          <v-col cols="12" sm="6" md="1" v-if="form.id_regimen_propiedad === 3"> 
            <v-text-field label="Predio" color="#F2AA1F" v-model="form.cod_pred"></v-text-field> 
          </v-col> 
          <v-col cols="12" sm="6" md="1" v-if="form.id_regimen_propiedad === 3"> 
            <v-text-field label="Unidad" color="#F2AA1F" v-model="form.cod_uni"></v-text-field> 
          </v-col> 
          <v-col cols="12" sm="6" md="1" v-if="form.id_regimen_propiedad === 3"> 
            <v-text-field label="Bloque" color="#F2AA1F" v-model="form.cod_bloq"></v-text-field> 
          </v-col> 
          <v-col cols="12" sm="6" md="1" v-if="form.id_regimen_propiedad === 3"> 
            <v-select :items="tipoPiso" label="Tipo de Piso" v-model="form.id_tipo_piso" item-text="name" item-value="value" color="#F2AA1F" ></v-select> 
          </v-col> 
          <v-col cols="12" sm="6" md="1" v-if="form.id_regimen_propiedad === 3"> 
            <v-text-field label="Piso" color="#F2AA1F" v-model="form.cod_piso"></v-text-field> 
          </v-col>
      </v-row> 
      </v-card-text> 
    </v-card>

      <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color fill-width" v-if="form.id_regimen_propiedad === 3">
      <v-card-title class="centered-title">ÁREAS</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Alicuota" 
             color = #F2AA1F 
             v-model="form.alicuota" 
             type="number"
             @input="formatDecimal('alicuota')">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área de Terreno" 
             color = #F2AA1F 
             v-model="form.area_terreno" 
             type="number" 
             @input="formatDecimal('area_terreno')">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común de Terreno" 
             color = #F2AA1F 
             v-model="form.area_comun_terreno" 
             type="number"
             @input="formatDecimal('area_comun_terreno')">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="unidadArea" 
              label="Unidad de Área" 
              v-model="form.id_unidad_area" 
              item-text="name" 
              item-value="value" 
              color = #F2AA1F
            ></v-select>
          </v-col>          
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Individual Construida" 
             color = #F2AA1F 
             v-model="form.area_individual_construida" 
             type="number"
             @input="formatDecimal('area_individual_construida')">>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común Construida" 
             color = #F2AA1F 
             v-model="form.area_comun_construida" 
             type="number"
             @input="formatDecimal('area_comun_construida')">
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
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Botón -->    
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn class="custom-text-color" color=#668A4C @click="submitForm">Guardar</v-btn>
      </v-col>
    </v-row>     

  </v-container>  
</template>

<script>
export default {
  name: 'FormIdentificacion',
  data() {
    return {
      form: {
        id_tipo_predio: '',
        id_regimen_propiedad: '',
        clave_catastral_anterior: '',
        clave_catastral: '',
        id_prov: '',
        id_can: '',
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
        sector: ''
      },
      // Listados
      tipoPredios: [ 
        { name: 'Urbano', value: 1 }, 
        { name: 'Rural', value: 2 } 
      ],
      regimenPropiedad: [ 
        { name: 'Unipropiedad', value: 1 }, 
        { name: 'Coopropietarios', value: 2 },
        { name: 'Propiedad Horizontal', value: 3 }  
      ],
      tipoPiso: [ 
        { name: 'Piso', value: 1 }, 
        { name: 'Subsuelo', value: 2 }        
      ],
      unidadArea: [ 
        { name: 'Metros', value: 1 }, 
        { name: 'Hectareas', value: 2 }        
      ]      
    }
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // Lógica para enviar el formulario
    },
    navigateToMenuRural() { 
      this.$router.push('/menu-rural'); 
    },
    handleRegimenChange() {
      if(this.form.id_regimen_propiedad !== 3){
        this.limpiarCampos();

      }
    },
    limpiarCampos(){ 
      // Limpiar los campos
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
    },
    formatoDecimal(field){
      if(this.form[field] !== ''){
        this.form[field] = parseFloat(this.form[field]).toFixed(2);
      }
    }
  }
  
}
</script>

<style scoped>
.container {
  background-color: #ACCC7B; /* Fondo */
  border: 0; /* Borde personalizado */
  padding: 0; /* Eliminar padding */
  margin: 0; /* Eliminar margen */
}

.block-color {
  background-color: #F1ECE7;
  color: #668A4C; 
}

.custom-text-color {
  color: #F1ECE7; 
}

.vertical-divider { 
  height: 30px; /* Altura de la línea */ 
  align-self: center; 
  margin: 0 16px; /* Espaciado a los lados de la línea */ 
  border-left: 2px solid #668A4C;
}

.centered-title { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  text-align: center;
}

.fill-width { 
  width: 100%; /* Asegura que el v-card ocupe todo el ancho del contenedor */
}

</style>
