<template>
  <v-content class="custom-background">
    <v-container>
      <v-form>
        <v-row justify="center" class="mt-0 mb-1">
          <v-col cols="auto" class="d-flex justify-center"> 
            <v-btn color="primary" @click="submitForm" class="mx-2">Guardar</v-btn> 
            <v-btn color="primary" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
          </v-col>
        </v-row>        
        <!-- Primer Bloque -->
        <v-card class="mb-5">
          <v-card-title>BLOQUE CONSTRUCTIVO - PISO</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select 
                  :items="tipoPredios" 
                  label="Tipo de Predio" 
                  v-model="form.id_tipo_predio" 
                  item-text="name" 
                  item-value="value" 
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6" md="4">                
                <v-select 
                  :items="regimenPropiedad" 
                  label="Régimen de Propiedad" 
                  v-model="form.id_regimen_propiedad" 
                  item-text="name" 
                  item-value="value" 
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Clave Catastral Anterior" 
                  v-model="form.clave_catastral_anterior">
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Clave Catastral" 
                  v-model="form.clave_catastral">
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Segundo Bloque -->
        <v-card class="mb-5">
          <v-card-title>CLAVE CATASTRAL</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Provincia" v-model="form.id_prov"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Cantón" v-model="form.id_can"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Parroquia" v-model="form.id_par"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Zona" v-model="form.cod_zon"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Sector" v-model="form.cod_sec"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Polígono/Manzana" v-model="form.cod_pol_man"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Predio" v-model="form.cod_pred"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Tercer Bloque -->
        <v-card class="mb-5">
          <v-card-title>PROPIEDAD HORIZONTAL</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Unidad" v-model="form.cod_uni"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Bloque" v-model="form.cod_bloq"></v-text-field>
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
                <v-text-field label="Piso" v-model="form.cod_piso"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Cuarto Bloque -->
        <v-card class="mb-5">
          <v-card-title>ÁREAS</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Alicuota" v-model="form.alicuota" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Área de Terreno" v-model="form.area_terreno" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Área Común de Terreno" v-model="form.area_comun_terreno" type="number"></v-text-field>
              </v-col>            

              <v-col cols="12" sm="6" md="4">                
                <v-select 
                  :items="unidadArea" 
                  label="Unidad de Área" 
                  v-model="form.id_unidad_area" 
                  item-text="name" 
                  item-value="value" 
                ></v-select>
              </v-col>
              
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Área Individual Construida" v-model="form.area_individual_construida" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Área Común Construida" v-model="form.area_comun_construida" type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Quinto Bloque -->
        <v-card class="mb-5">
          <v-card-title>EJES VIALES</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Eje Principal" v-model="form.eje_principal"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Eje Secundario" v-model="form.eje_secundario"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Sector" v-model="form.sector"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-row justify="center">
          <v-col cols="auto">
            <v-btn color="primary" @click="submitForm">Guardar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'FormIdentificacion',
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
