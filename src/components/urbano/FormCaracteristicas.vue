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
        <v-card-title class="centered-title">CARACTERISTICAS DEL PREDIO</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-select 
                :items="usoPredio" 
                label="Uso del Predio" 
                v-model="form.id_uso_predio" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="formaLote" 
                label="Forma Lote" 
                v-model="form.id_forma_lote" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>
            
            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="locaManzana" 
                label="Localización Manzana" 
                v-model="form.id_localizacion_manzana" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>                

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="coberturaNatu" 
                label="Cobertura Natural" 
                v-model="form.id_cobertura_natural" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>  

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="ecosistema" 
                label="Ecosistema Relevante" 
                v-model="form.id_ecosistema_relevante" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>  

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="disponibilidad" 
                label="Disponibilidad Riego" 
                v-model="form.id_disponibilidad_riego" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>  

          </v-row>
        </v-card-text>
      </v-card>

      <!-- Segundo Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title>SERVICIOS</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Agua" 
                v-model="form.id_agua" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Sanitarias" 
                v-model="form.id_sanitarias" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="E. Electrica" 
                v-model="form.id_energia_electrica" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Trasnporte Urbano" 
                v-model="form.transporte_urbano" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Elimianción Basura" 
                v-model="form.id_eliminacion_basura" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col> 

          </v-row>              
        </v-card-text>
      </v-card>

      <!-- Tercer Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title></v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Tiene Medidor Agua" 
                v-model="form.tiene_medidor_agua" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Número Medidores" 
                v-model="form.num_medidores_agua" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Tiene Medidor Energia" 
                v-model="form.tiene_medidor_energia" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>             

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Número Medidores" 
              v-model="form.num_medidores_energia" 
              type="number" color = #F2AA1F></v-text-field>
            </v-col>                

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Frente" 
                v-model="form.frente_total" 
                type="number" color = #F2AA1F
                @input="formatDecimal('frente_total')"></v-text-field>
            </v-col>    

            <v-col cols="12" sm="6" md="2">
              <v-text-field label="Fondo" 
                v-model="form.fondo" 
                type="number" color = #F2AA1F
                @input="formatDecimal('fondo')"></v-text-field>
            </v-col>    

          </v-row>
        </v-card-text>
      </v-card>

      <!-- Cuarto Bloque -->
      <v-card class="mb-3 block-color fill-width">
        <v-card-title>COMUNICACIONES</v-card-title>
        <v-card-text>
          <v-row>

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Telefonia Fija" 
                v-model="form.telefonia_fija" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>    
            
            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Telefonia Movil" 
                v-model="form.telefonia_movil" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>    

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Telefonia Satelital" 
                v-model="form.telefonia_satelital" 
                item-text="name" 
                item-value="value" 
                color = #F2AA1F
              ></v-select>
            </v-col>    

            <v-col cols="12" sm="6" md="2">                
              <v-select 
                :items="validacion" 
                label="Internet" 
                v-model="form.internet" 
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
          <v-btn class="custom-text-color" color=#114358 @click="submitForm">Guardar</v-btn>
        </v-col>
      </v-row>

    </v-container>
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
        formatoDecimal(field){
          if(this.form[field] !== ''){
            this.form[field] = parseFloat(this.form[field]).toFixed(2);
          }
        },
        // Listados
        validacion: [ 
          { name: 'SI', value: 1 }, 
          { name: 'NO', value: 2 } 
        ],
        usoPredio: [ 
          { name: 'INFORMACIÓN NO DISPONIBLE', value: 1 }, 
          { name: 'INDUSTRIAL', value: 2 }, 
          { name: 'COMERCIAL', value: 3 }, 
          { name: 'DE SERVICIOS', value: 4 }, 
          { name: 'RESIDENCIAL', value: 5 }, 
          { name: 'RESIDENCIAL (INTERÉS SOCIAL)', value: 6 }, 
          { name: 'EQUIPAMIENTO', value: 7 }, 
          { name: 'AGROPECUARIO', value: 8 }, 
          { name: 'FORESTAL', value: 9 }, 
          { name: 'ACUÍCOLA', value: 10 }, 
          { name: 'PROTECCIÓN ECOLÓGICA', value: 11 }, 
          { name: 'MÚLTIPLE', value: 12 }
        ],

        formaLote: [ 
          { name: 'NO TIENE', value: 0 },
          { name: 'REGULAR', value: 1 }, 
          { name: 'IRREGULAR', value: 2 },
          { name: 'MUY IRREGULAR', value: 3 }  
        ],

        locaManzana: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ESQUINERO', value: 2 }, 
          { name: 'EN CABECERA', value: 3 }, 
          { name: 'INTERMEDIO', value: 4 }, 
          { name: 'EN L', value: 5 }, 
          { name: 'EN T', value: 6 }, 
          { name: 'EN CRUZ', value: 7 }, 
          { name: 'MANZANERO', value: 8 }, 
          { name: 'TRIANGULAR', value: 9 }, 
          { name: 'EN CALLEJÓN', value: 10 }, 
          { name: 'INTERIOR', value: 11 }
        ],

        coberturaNatu: [ 
          { name: 'NO TIENE', value: 0 },
          { name: 'ARBÓREA', value: 1 }, 
          { name: 'ARBUSTIVA', value: 2 },
          { name: 'MUY IRREGULAR', value: 3 }
        ],

        ecosistema: [ 
          { name: 'NO TIENE', value: 0 },
          { name: 'PÁRAMO', value: 1 }, 
          { name: 'HUMEDAL', value: 2 },        
          { name: 'BOSQUE PRIMARIO', value: 3 },
          { name: 'BOSQUE SECUNDARIO', value: 4 }
        ],

        disponibilidad: [ 
          { name: 'NO TIENE', value: 0 },
          { name: 'PERMANENTE', value: 1 }, 
          { name: 'PARCIAL', value: 2 },
          { name: 'OPCIONAL', value: 3 }          
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
  