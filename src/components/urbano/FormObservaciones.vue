<template>
    <v-container class="container">
      <v-row justify="center" class="mb-1">
        <v-col cols="auto" class="d-flex justify-center"> 
          <v-btn color=#114358 @click="submitForm" class="mx-2 custom-text-color">Guardar</v-btn> 
          <v-btn color=#114358 @click="navigateToMenuUrbano" class="mx-2 custom-text-color">Salir</v-btn>
        </v-col>
      </v-row>        
      <!-- Primer Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title class="centered-title">OBASERVACIONES</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="12">
              <v-text-field label="Observación" 
                v-model="form.observacion_ficha" type="textarea"
                color = #F2AA1F>
              </v-text-field>
            </v-col>

          </v-row>
        </v-card-text>
      </v-card>
      <!-- Segundo Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title>RESPONSABLES</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Informador" v-model="form.id_informador" color = #F2AA1F></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Actualizador" v-model="form.actualizador" color = #F2AA1F></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Fecha Actualización" v-model="form.fecha_actualizacion_aud" type="date" color = #F2AA1F></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Supervisor" v-model="form.id_fiscalizador" color = #F2AA1F></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Fecha Supervición" v-model="form.fecha_fiscalizacion" type="date" color = #F2AA1F></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <!-- Botón -->
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn class="custom-text-color" color=#114358 @click="submitForm">Guardar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'FormObservaciones',
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
      navigateToMenuUrbano() { 
        this.$router.push('/menu-urbano'); 
      }
    }
  }
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
  width: 100%; /* Asegura que el v-card ocupe todo el ancho del contenedor */
}
  </style>
  