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
            <v-card-title>BLOQUE CONSTRUCTIVO - PISO</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Código Unidad" 
                  v-model="form.cod_uni"></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Código de Bloque" 
                  v-model="form.cod_bloq"></v-text-field>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="tipoPiso" 
                    label="Tipo de Piso" 
                    v-model="form.id_tipo_piso" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Código de Piso" 
                  v-model="form.cod_piso"></v-text-field>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Segundo Bloque -->
          <v-card class="mb-5">
            <v-card-title> DATOS DESCRIPTIVOS DEL BLOQUE CONSTRUCTIVO - PISO</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="condicionFisica" 
                    label="Condición Fisica" 
                    v-model="form.id_tipo_piso" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="estadoConservacion" 
                    label="Estado de Conservación" 
                    v-model="form.id_estado_conservacion" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="validado" 
                    label="Condición Patrimonial" 
                    v-model="form.id_condicion_patrimonial" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Año Construcción" 
                  v-model="form.anio_construccion" type="number"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Año Restauración" 
                  v-model="form.anio_restauracion" type="number"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Área Construcción (m2)" 
                  v-model="form.area_construida" type="number"></v-text-field>
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
                    :items="ocupacionBloque" 
                    label="Ocupación del Bloque o Piso" 
                    v-model="form.id_ocupacion" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="instalacioneEspeciales" 
                    label="Instalaciones Especiales" 
                    v-model="form.id_instalaciones_especiales" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Cuarto Bloque -->
          <v-card class="mb-5">
            <v-card-title>ELEMENTOS CONSTRUCTIVOS</v-card-title>
            <v-card-text>
              <v-row>
  
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="estructura" 
                    label="Estructura" 
                    v-model="form.id_estructura" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="paredes" 
                    label="Paredes" 
                    v-model="form.id_paredes" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="cubierta" 
                    label="Cubierta" 
                    v-model="form.id_cubierta" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="acabadosVivienda" 
                    label="Acabados Vivienda" 
                    v-model="form.id_acabados_vivienda" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Quinto Bloque -->
          <v-card class="mb-5">
            <v-card-title>ACABADOS EXTERIORES</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="revParedes" 
                    label="Revestimiento Paredes" 
                    v-model="form.id_revestimiento_paredes" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="revCubierta" 
                    label="Revestimiento Cubierta" 
                    v-model="form.id_revestimiento_cubierta" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="ventanas" 
                    label="Marco Ventanas" 
                    v-model="form.id_marco_ventanas" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="vidrios" 
                    label="Vidrios" 
                    v-model="form.id_vidrios" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">                
                  <v-select 
                    :items="puertas" 
                    label="Puertas" 
                    v-model="form.id_puertas" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>

          <!-- Sexto Bloque -->
          <v-card class="mb-5">
            <v-card-title>PERMISO DE CONSTRUCCIÓN</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Permiso de Construcción" 
                  v-model="form.permiso_construccion"></v-text-field>
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
    name: 'FormBloques',
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
        tipoPiso: [ 
          { name: 'Piso', value: 1 }, 
          { name: 'Subsuelo', value: 2 }        
        ],
        validado: [ 
          { name: 'Si', value: 1 }, 
          { name: 'No', value: 2 }        
        ],        
        condicionFisica: [ 
          { name: 'EN ACABADOS', value: 1 }, 
          { name: 'EN ESTRUCTURA', value: 2 }        
        ],
        estadoConservacion: [ 
          { name: 'REGULAR', value: 1 }, 
          { name: 'MALO', value: 2 }        
        ],   
     
        ocupacionBloque: [ 
          { name: 'INDUSTRIAL', value: 1 }, 
          { name: 'COMERCIAL', value: 2 }        
        ],   
        instalacioneEspeciales: [ 
          { name: 'ASCENSOR', value: 1 }, 
          { name: 'CIRCUITO CERRADO DE TV', value: 2 }        
        ],   
        estructura: [ 
          { name: 'ADOBE', value: 1 }, 
          { name: 'BLOQUE', value: 2 }        
        ],
        paredes: [ 
          { name: 'CAÑA GUADÚA', value: 1 }, 
          { name: 'GYPSUM', value: 2 }        
        ],
        cubierta: [ 
          { name: 'MADERA COMÚN', value: 1 }, 
          { name: 'PALMA, PAJA', value: 2 }        
        ],
        acabadosVivienda: [ 
          { name: 'HORMIGÓN ARMADO', value: 1 }, 
          { name: 'HORMIG. ARQUITECT.', value: 2 }        
        ],
        revParedes: [ 
          { name: 'MADERA TRATADA', value: 1 }, 
          { name: 'STEEL PANEL', value: 2 }        
        ],
        revCubierta: [ 
          { name: 'ZINC', value: 1 }, 
          { name: 'TEJA', value: 2 }        
        ],
        ventanas: [ 
          { name: 'ALUMINIO', value: 1 }, 
          { name: 'ENROLLABLE', value: 2 }        
        ],
        vidrios: [ 
          { name: 'CATEDRAL, ESMERILADO', value: 1 }, 
          { name: 'VIDRIO COMÚN (CLARO)', value: 2 }        
        ],
        puertas: [ 
          { name: 'MADERA TAMBORADA', value: 1 }, 
          { name: 'MADERA PANELADA', value: 2 }        
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
  