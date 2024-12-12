<template>
  <v-container class="container">
    <v-row justify="center" class="mb-1">
      <v-col cols="auto" class="d-flex justify-center"> 
        <v-btn color=#114358 @click="submitForm" class="mx-2 custom-text-color">Nuevo</v-btn> 
        <v-btn color=#114358 @click="submitForm" class="mx-2 custom-text-color">Guardar</v-btn> 
        <v-btn color=#114358 @click="navigateToMenuUrbano" class="mx-2 custom-text-color">Salir</v-btn>
      </v-col>
    </v-row>        
    <!-- Primer Bloque -->
    <v-card class="mb-3">
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
        <v-btn class="custom-text-color" color=#114358 @click="submitForm">Guardar</v-btn>
      </v-col>
    </v-row>

  </v-container>
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
          { name: 'OBRAS ESPECIALES', value: 1 }, 
          { name: 'MEJORAS', value: 2 } 
        ],
        materiales: [ 
          { name: 'PILOTAJE HORMIGÓN ARMADO', value: 1 }, 
          { name: 'PIEDRA', value: 2 },
          { name: 'METÁLICA ENROLLABLE', value: 3 }  
        ],
        estadoConservacion: [ 
          { name: 'MUY BUENO', value: 1 }, 
          { name: 'BUENO', value: 2 },
          { name: 'REGULAR', value: 1 }, 
          { name: 'MALO', value: 2 }        
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
  