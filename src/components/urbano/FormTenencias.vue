<template>
    <v-container class="container">

      <v-row justify="center" class="mb-1">
        <v-col cols="auto" class="d-flex justify-center"> 
          <v-btn color=#114358 @click="guardar" class="mx-2 custom-text-color">Guardar</v-btn> 
          <v-btn color=#114358 class="mx-2 custom-text-color">Documentos</v-btn> 
          <v-btn color=#114358 @click="navigateToMenuUrbano" class="mx-2 custom-text-color">Salir</v-btn>
        </v-col>
      </v-row>              
      <!-- Primer y Segundo Bloque juntos en horizontal -->
      <v-row justify="center" class="mb-3">
        <v-col cols="12" md="6">
          <v-card class="block-color fill-width">
            <v-card-title class="centered-title">INFORMACIÓN LEGAL</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-select 
                    :items="validacion" 
                    label="Permite Ingreso" 
                    v-model="form.permite_ingreso" 
                    item-text="name" 
                    item-value="value" 
                    color = #F2AA1F
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-select 
                    :items="validacion" 
                    label="Presenta Escritura" 
                    v-model="form.presenta_escritura" 
                    item-text="name" 
                    item-value="value" 
                    color = #F2AA1F
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-select 
                    :items="validacion" 
                    label="Asent. de Hecho" 
                    v-model="form.asentamiento_de_hecho" 
                    item-text="name" 
                    item-value="value" 
                    color = #F2AA1F
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-select 
                    :items="validacion" 
                    label="Conflicto" 
                    v-model="form.conflicto" 
                    item-text="name" 
                    item-value="value"
                    color = #F2AA1F
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="block-color fill-width">
            <v-card-title class="centered-title">PARTICIPACIÓN</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Porcentaje Participación" 
                    v-model="form.porcentaje_participacion" 
                    type="number"
                    color = #F2AA1F>
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select 
                    :items="formaPosecion" 
                    label="Forma de Propiedad o Posesión" 
                    v-model="form.id_forma_propiedad" 
                    item-text="name" 
                    item-value="value"
                    color = #F2AA1F
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tercer Bloque -->
      <v-card class="mb-3 block-color">
        <v-card-title>PROPIETARIO</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Propietario" 
                v-model="form.id_propietario"
                color = #F2AA1F>
              </v-text-field>
            </v-col>
            <v-btn color=#114358 @click="navigateToCiudadano" class="mx-2 custom-text-color">Editar</v-btn>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Cuarto Bloque -->
      <v-card class="mb-3 block-color">
        <v-card-title>PROTOCOLIZACIÓN - NOTARIA</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="2">                  
              <v-select 
                :items="provProtocolizacion" 
                label="Provincia Protocolización" 
                v-model="form.id_prov_protocol" 
                item-text="name" 
                item-value="value"
                color = #F2AA1F 
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-select 
                :items="cantonProtocolizacion" 
                label="Cantón Protocolización" 
                v-model="form.id_can_protocol" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Fecha de Protocolización" 
                v-model="form.fecha_inscripcion" 
                type="date" color = #F2AA1F>
              </v-text-field>
            </v-col>            

            <v-col cols="12" sm="6" md="2">                
              <v-text-field label="Número de Notaría" 
                v-model="form.numero_notaria" 
                type="number" color = #F2AA1F>
              </v-text-field>
            </v-col>
            
            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Área" 
                v-model="form.area_registro" 
                type="number" color = #F2AA1F>
              </v-text-field>
            </v-col>

          </v-row>
        </v-card-text>
      </v-card>

      <!-- Quinto Bloque -->
      <v-card class="mb-3 block-color">
        <v-card-title>DATOS DE INSCRIPCIÓN - REGISTRO</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="2">                  
              <v-select 
                :items="provRegistro" 
                label="Provincia Registro" 
                v-model="form.id_provincia" 
                item-text="name" 
                item-value="value"
                color = #F2AA1F 
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-select 
                :items="cantonRegistro" 
                label="Cantón Registro" 
                v-model="form.id_canton" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Fecha de Registro" 
                v-model="form.fecha_escritura" 
                type="date" color = #F2AA1F>
              </v-text-field>
            </v-col>            

            <v-col cols="12" sm="6" md="2">                
              <v-text-field label="Repertorio" 
                v-model="form.repertorio" 
                type="number" color = #F2AA1F>
              </v-text-field>
            </v-col>
            
            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Folio" 
                v-model="form.folio" 
                type="number" color = #F2AA1F>
              </v-text-field>
            </v-col>                

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="N° Registro" 
                v-model="form.numero_registro" 
                type="number" color = #F2AA1F>
              </v-text-field>
            </v-col>

          </v-row>
        </v-card-text>
      </v-card>  

      <v-card class="mb-3 block-color">
        <v-card-title>LINDEROS</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Lindero Norte" 
              v-model="form.lindero_norte" type="text" color = #F2AA1F>
            </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Lindero Sur" 
              v-model="form.lindero_sur" type="text" color = #F2AA1F>
            </v-text-field>
            </v-col>  

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Lindero Este" 
              v-model="form.lindero_este" type="text" color = #F2AA1F>
            </v-text-field>
            </v-col>  

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Lindero Oeste" 
              v-model="form.lindero_oeste" type="text" color = #F2AA1F>
            </v-text-field>
            </v-col>  

          </v-row>
        </v-card-text>
      </v-card>

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
          id_propietario: '',
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
          propietario_anterior: '',        
        },
        // Listados
        validacion: [ 
          { name: 'SI', value: true }, 
          { name: 'NO', value: false } 
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
        formaPosecion: [
          { name: 'ADJUDICACIÓN', value: 1 }, 
          { name: 'COMPRA - VENTA', value: 2 }, 
          { name: 'DONACIÓN', value: 3 }, 
          { name: 'HERENCIA', value: 4 }, 
          { name: 'PRESCRIPCIÓN ADQUISITIVA', value: 5 }, 
          { name: 'PARTICIÓN', value: 6 }, 
          { name: 'PERMUTA', value: 7 }, 
          { name: 'REMATA', value: 8 }, 
          { name: 'DERECHOS Y ACCIONES', value: 9 }, 
          { name: 'POSESIÓN', value: 10 }, 
          { name: 'POSESIÓN ANCESTRAL', value: 11 }, 
          { name: 'SIN POSESIONARIOS', value: 12 }, 
          { name: 'COMPENSACIÓN ', value: 13 }, 
          { name: 'OTROS', value: 14 }          
        ]
     
      }
    },
    methods: {

      async guardar(){
        console.log('Guardar formulario');
        const nuevaTenencia = {
          id_predio : this.id_predio,
          permite_ingreso: this.form.permite_ingreso,
          presenta_escritura: this.form.presenta_escritura,
          asentamiento_de_hecho: this.form.asentamiento_de_hecho,
          conflicto: this.form.conflicto,
          porcentaje_participacion: this.form.porcentaje_participacion,
          id_forma_propiedad: this.form.id_forma_propiedad,
          id_propietario: this.form.id_propietario,
          id_prov_protocol: this.form.id_prov_protocol,
          id_can_protocol: this.form.id_can_protocol,
          fecha_inscripcion: this.form.fecha_inscripcion,
          numero_notaria: this.form.numero_notaria,
          area_registro: this.form.area_registro,
          id_unidad: this.form.id_unidad,
          id_provincia: this.form.id_provincia,
          id_canton: this.form.id_canton,
          fecha_escritura: this.form.fecha_escritura,
          repertorio: this.form.repertorio,
          folio: this.form.folio,
          numero_registro: this.form.numero_registro,
          lindero_norte: this.form.lindero_norte,
          lindero_sur: this.form.lindero_sur,
          lindero_este: this.form.lindero_este,
          lindero_oeste: this.form.lindero_oeste, 
          propietario_anterior: this.form.propietario_anterior
        }
        console.log('Datos a guardar', nuevaTenencia);

        try {
          const response = await axios.post('http://localhost:3001/api/catastro_tenencia', nuevaTenencia);
          const idTenecia = response.data.id;
          console.log('ID de la tenencia creada', idTenecia);
          alert('Tenencia creada con éxito');
        } catch (error) {
          console.error('Error al guardar la tenencia', error);
          alert(`Error al guardar la tenencia: ${error.message.data.detail}`);
        }
      },

      navigateToMenuUrbano() { 
        this.$router.push('/menu-urbano'); 
      },
      navigateToCiudadano(){
        this.$router.push('/ingreso-ciudadano'); 
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
  