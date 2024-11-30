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
            <v-card-title>VIAS</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="12">
                  <v-text-field label="Nombre Vía" 
                  v-model="form.nombre_via" type="text"></v-text-field>
                </v-col>                   
  
                <v-col cols="12" sm="6" md="12">                
                  <v-select 
                    :items="tipoVia" 
                    label="Tipo de via" 
                    v-model="form.id_tipo_via" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
               
                <v-col cols="12" sm="6" md="12">                
                  <v-select 
                    :items="validacion" 
                    label="Vía Principal" 
                    v-model="form.via_principal" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>                

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Longitud" 
                  v-model="form.longitud" type="number"></v-text-field>
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
    name: 'FormVias',
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
        validacion: [ 
          { name: 'SI', value: 1 }, 
          { name: 'NO', value: 2 } 
        ],
        tipoVia: [ 
          { name: 'AUTOPISTA', value: 1 }, 
          { name: 'AVENIDA', value: 2 },
          { name: 'CALLE', value: 2 },
          { name: 'CALLEJÓN', value: 2 },
          { name: 'CARRETERA PRIMER ORDEN', value: 2 }
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
  