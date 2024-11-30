<template>
    <v-content class="custom-background">
      <v-container>
        <v-form>
          <v-row justify="center" class="mt-0 mb-1">
            <v-col cols="auto" class="d-flex justify-center"> 
              <v-btn color="green" @click="submitForm" class="mx-2">Guardar</v-btn> 
              <v-btn color="green" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
            </v-col>
          </v-row>        
          <!-- Primer Bloque -->
          <v-card class="mb-5">
            <v-card-title>OBASERVACIONES</v-card-title>
            <v-card-text>
              <v-row>
  
                <v-col cols="12" sm="6" md="12">
                  <v-text-field label="Observación" 
                    v-model="form.observacion_ficha" type="textarea">
                  </v-text-field>
                </v-col>
  
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Segundo Bloque -->
          <v-card class="mb-5">
            <v-card-title>RESPONSABLES</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="12">
                  <v-text-field label="Informador" v-model="form.id_informador"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field label="Actualizador" v-model="form.actualizador"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Fecha Actualización" v-model="form.fecha_actualizacion_aud" type="date"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field label="Supervisor" v-model="form.id_fiscalizador"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Fecha Supervición" v-model="form.fecha_fiscalizacion" type="date"></v-text-field>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>

           <v-row justify="center">
            <v-col cols="auto">
              <v-btn color="green" @click="submitForm">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-content>
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
  .custom-background {
    background-color: #f5f5f5; 
  }
  </style>
  