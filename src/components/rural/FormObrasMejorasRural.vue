<template>
    <v-content class="custom-background">
      <v-container>
        <v-form>
          <v-row justify="center" class="mt-0 mb-1">
            <v-col cols="auto" class="d-flex justify-center"> 
              <v-btn color="green" style="color: white;" @click="submitForm" class="mx-2">Guardar</v-btn> 
              <v-btn color="green" style="color: white;" @click="navigateToMenuRural" class="mx-2">Salir</v-btn>
            </v-col>
          </v-row>        
          <!-- Primer Bloque -->
          <v-card class="mb-5">
            <v-card-title>OBRAS - MEJORAS</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-select 
                    :items="tipoObra" 
                    label="Tipo de Obra" 
                    v-model="form.id_tipo_obra" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="12">                
                  <v-select 
                    :items="materiales" 
                    label="Materia" 
                    v-model="form.id_material" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Área o Dimensión" 
                    v-model="form.area" type="number">
                  </v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="estadoConservacion" 
                    label="Estado de Conservación" 
                    v-model="form.id_estado" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
   
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn color="green" style="color: white;" @click="submitForm">Guardar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-content>
  </template>
  
  <script>
  export default {
    name: 'FormObrasMejoras',
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
        tipoObra: [ 
          { name: 'CISTERNA', value: 1 }, 
          { name: 'CUBIERTA ESTRUCTURA MADERA TERRAZA', value: 2 } 
        ],
        materiales: [ 
          { name: 'PILOTAJE HORMIGÓN ARMADO', value: 1 }, 
          { name: 'PIEDRA', value: 2 },
          { name: 'METÁLICA ENROLLABLE', value: 3 }  
        ],
        estadoConservacion: [ 
          { name: 'BUENO', value: 1 }, 
          { name: 'REGULAR', value: 2 }        
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
  .custom-background {
    background-color: #f5f5f5; 
  }
  </style>
  