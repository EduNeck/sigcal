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
            <v-card-title>INFORMACIÓN</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="validacion" 
                    label="Permite Ingreso a Predio" 
                    v-model="form.permite_ingreso" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
  
                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="validacion" 
                    label="Presenta Escritura" 
                    v-model="form.presenta_escritura" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="validacion" 
                    label="Asentamiento de Hecho" 
                    v-model="form.asentamiento_de_hecho" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="validacion" 
                    label="Conflicto" 
                    v-model="form.conflicto" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Segundo Bloque -->
          <v-card class="mb-5">
            <v-card-title></v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Porcentaje Participación" 
                    v-model="form.porcentaje_participacion" 
                    type="number">
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Forma de Propiedad o Posesión" 
                    v-model="form.id_forma_propiedad">
                  </v-text-field>
                </v-col>
                
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Tercer Bloque -->
          <v-card class="mb-5">
            <v-card-title>PROPIETARIO</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Propietario Anterior" 
                    v-model="form.id_propietario_anterior">
                  </v-text-field>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Cuarto Bloque -->
          <v-card class="mb-5">
            <v-card-title>PROTOCOLIZACIÓN - NOTARIA</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                  
                  <v-select 
                    :items="provProtocolizacion" 
                    label="Provincia Protocolización" 
                    v-model="form.id_prov_protocol" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="cantonProtocolizacion" 
                    label="Cantón Protocolización" 
                    v-model="form.id_can_protocol" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Fecha de Protocolización" 
                    v-model="form.fecha_inscripcion" 
                    type="date">
                 </v-text-field>
                </v-col>            
  
                <v-col cols="12" sm="6" md="4">                
                  <v-text-field label="Número de Notaría" 
                    v-model="form.numero_notaria" 
                    type="number">
                  </v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Área" 
                    v-model="form.area_registro" 
                    type="number">
                  </v-text-field>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Quinto Bloque -->
          <v-card class="mb-5">
            <v-card-title>DATOS DE INSCRIPCIÓN - REGISTRO</v-card-title>
            <v-card-text>
              <v-row>

                <v-col cols="12" sm="6" md="4">                  
                  <v-select 
                    :items="provRegistro" 
                    label="Provincia Registro" 
                    v-model="form.id_provincia" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="cantonRegistro" 
                    label="Cantón Registro" 
                    v-model="form.id_canton" 
                    item-text="name" 
                    item-value="value" 
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Fecha de Registro" 
                    v-model="form.fecha_escritura" 
                    type="date">
                  </v-text-field>
                </v-col>            
  
                <v-col cols="12" sm="6" md="4">                
                  <v-text-field label="Repertorio" 
                    v-model="form.repertorio" 
                    type="number">
                  </v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Folio" 
                    v-model="form.folio" 
                    type="number">
                  </v-text-field>
                </v-col>                

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Número de Registro" 
                    v-model="form.numero_registro" 
                    type="number">
                  </v-text-field>
                </v-col>      

              </v-row>
            </v-card-text>
          </v-card>  

          <v-card class="mb-5">
            <v-card-title>LINDEROS</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Lindero Norte" 
                  v-model="form.lindero_norte" type="text">
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Lindero Sur" 
                  v-model="form.lindero_sur" type="text">
                </v-text-field>
                </v-col>  

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Lindero Este" 
                  v-model="form.lindero_este" type="text">
                </v-text-field>
                </v-col>  

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Lindero Oeste" 
                  v-model="form.lindero_oeste" type="text">
                </v-text-field>
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
    name: 'FormTenencia',
    data() {
      return {
        form: {
          permite_ingreso: '',
          presenta_escritura: '',
          asentamiento_de_hecho: '',
          conflicto: '',
          porcentaje_participacion: '',
          id_forma_propiedad: '',
          id_propietario_anterior: '',
          id_prov_protocol: '',
          id_can_protocol: '',
          fecha_inscripcion: '',
          numero_notaria: '',
          area_registro: '',
          id_unidad: '',
          id_provincia: '',
          id_canton: '',
          fecha_escritura: '',
          repertorio: '',
          folio: '',
          numero_registro: '',
          lindero_norte: '',
          lindero_sur: '',
          lindero_este: '',
          lindero_oeste: '',          
        },
        // Listados
        validacion: [ 
          { name: 'SI', value: 1 }, 
          { name: 'NO', value: 2 } 
        ],
        provProtocolizacion: [ 
          { name: 'Pichincha', value: 1 }, 
          { name: 'Guayas', value: 2 },
          { name: 'Azuay', value: 3 }  
        ],
        provRegistro: [ 
          { name: 'Pichincha', value: 1 }, 
          { name: 'Guayas', value: 2 },
          { name: 'Azuay', value: 3 }  
        ],        
        cantonProtocolizacion: [ 
          { name: 'Quito', value: 1 }, 
          { name: 'Guayaquil', value: 2 },
          { name: 'Cuenca', value: 3 }  
        ],    
        cantonRegistro: [ 
          { name: 'Quito', value: 1 }, 
          { name: 'Guayaquil', value: 2 },
          { name: 'Cuenca', value: 3 }  
        ],                    
     
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
  