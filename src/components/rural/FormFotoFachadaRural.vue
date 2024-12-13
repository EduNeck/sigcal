<template>
  <v-container>
    <v-row justify="center" class="mb-1">
      <v-col cols="auto" class="d-flex justify-center"> 
        <v-btn color=#668A4C style="color: white;" @click="submitForm" class="mx-2">Guardar</v-btn> 
        <v-btn color=#668A4C style="color: white;" @click="navigateToMenuRural" class="mx-2">Salir</v-btn>
      </v-col>
    </v-row>       

    <!-- Primer Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title>FOTO FACHADA</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Descripción" 
              v-model="form.descripcion"
              color = #F2AA1F>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Archivo" 
              v-model="form.foto" type="file"
              color = #F2AA1F>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select 
              :items="validacion" 
              label="Foto Principal" 
              v-model="form.principal" 
              item-text="name" 
              item-value="value" 
              color = #F2AA1F
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row justify="center">
      <v-col cols="auto">
        <v-btn color=#668A4C style="color: white;" @click="submitForm">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  export default {
    name: 'FormFotoFachada',
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
  