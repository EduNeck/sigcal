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
            <v-card-title>CARACTERISTICAS DEL PREDIO</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="usoPredio" 
                    label="Uso del Predio" 
                    v-model="form.id_uso_predio" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="formaLote" 
                    label="Forma Lote" 
                    v-model="form.id_forma_lote" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
               
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="locaManzana" 
                    label="Localización Manzana" 
                    v-model="form.id_localizacion_manzana" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>                

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="coberturaNatu" 
                    label="Cobertura Natural" 
                    v-model="form.id_cobertura_natural" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>  

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="ecosistema" 
                    label="Ecosistema Relevante" 
                    v-model="form.id_ecosistema_relevante" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>  

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="disponibilidad" 
                    label="Disponibilidad Riego" 
                    v-model="form.id_disponibilidad_riego" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>  

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Segundo Bloque -->
          <v-card class="mb-5">
            <v-card-title>SERVICIOS</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Agua" 
                    v-model="form.id_agua" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Sanitarias" 
                    v-model="form.id_sanitarias" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="E. Electrica" 
                    v-model="form.id_energia_electrica" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Trasnporte Urbano" 
                    v-model="form.transporte_urbano" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Elimianción Basura" 
                    v-model="form.id_eliminacion_basura" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col> 


              </v-row>              
            </v-card-text>
          </v-card>
  
          <!-- Tercer Bloque -->
          <v-card class="mb-5">
            <v-card-title></v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Tiene Medidor Agua" 
                    v-model="form.tiene_medidor_agua" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Número Medidores" 
                    v-model="form.num_medidores_agua" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Tiene Medidor Energia" 
                    v-model="form.tiene_medidor_energia" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>             

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Número Medidores" 
                  v-model="form.num_medidores_energia" 
                  type="number"></v-text-field>
                </v-col>                
  
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Frente" 
                    v-model="form.frente_total" 
                    type="number"></v-text-field>
                </v-col>    

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Fondo" 
                    v-model="form.fondo" 
                    type="number"></v-text-field>
                </v-col>    

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Cuarto Bloque -->
          <v-card class="mb-5">
            <v-card-title>COMUNICACIONES</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Telefonia Fija" 
                    v-model="form.telefonia_fija" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>    
                
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Telefonia Movil" 
                    v-model="form.telefonia_movil" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>    

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Telefonia Satelital" 
                    v-model="form.telefonia_satelital" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>    

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validacion" 
                    label="Internet" 
                    v-model="form.internet" 
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
    name: 'FormCaracteristicas',
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
        usoPredio: [ 
          { name: 'INDUSTRIAL', value: 1 }, 
          { name: 'COMERCIAL', value: 2 },
          { name: 'DE SERVICIOS', value: 2 },
          { name: 'RESIDENCIAL', value: 2 },
          { name: 'RESIDENCIAL (INTERÉS SOCIAL)', value: 2 },
          { name: 'EQUIPAMIENTO', value: 2 },
        ],
        formaLote: [ 
          { name: 'REGULAR', value: 1 }, 
          { name: 'IRREGULAR', value: 2 },
          { name: 'MUY IRREGULAR', value: 3 }  
        ],
        locaManzana: [ 
          { name: 'ESQUINERO', value: 1 }, 
          { name: 'EN CABECERA', value: 2 },
          { name: 'INTERMEDIO', value: 2 },
          { name: 'EN L', value: 2 },
          { name: 'EN T', value: 2 },
        ],
        coberturaNatu: [ 
          { name: 'ARBÓREA', value: 1 }, 
          { name: 'ARBUSTIVA', value: 2 }        
        ],
        ecosistema: [ 
          { name: 'PÁRAMO', value: 1 }, 
          { name: 'HUMEDAL', value: 2 }        
        ],
        disponibilidad: [ 
          { name: 'PERMANENTE', value: 1 }, 
          { name: 'PARCIAL', value: 2 }        
        ],        
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
  