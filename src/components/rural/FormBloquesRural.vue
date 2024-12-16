<template>
  <v-container class="container">
    <v-row justify="center" class="mb-1">
      <v-col cols="auto" class="d-flex justify-center"> 
        <v-btn color=#668A4C style="color: white;" @click="submitForm" class="mx-2">Guardar</v-btn> 
        <v-btn color=#668A4C style="color: white;" @click="navigateToMenuRural" class="mx-2">Salir</v-btn>
      </v-col>
    </v-row>        
    <!-- Primer Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title class="centered-title">BLOQUE CONSTRUCTIVO - PISO</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="2">
            <v-text-field 
              label="Código Unidad" 
              v-model="form.cod_uni" 
              type="number"
              color = #F2AA1F></v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="2">
            <v-text-field 
              label="Código de Bloque" 
              v-model="form.cod_bloq" 
              type="number"
              color = #F2AA1F></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="tipoPiso" 
              label="Tipo de Piso" 
              v-model="form.id_tipo_piso" 
              item-text="name" 
              item-value="value" 
              color = #F2AA1F></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field 
              label="Código de Piso" 
              v-model="form.cod_piso" 
              type="number"
              color = #F2AA1F></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
              <v-text-field label="Código Único Eléctronico Nacional" 
                v-model="form.cuen"
                color = #F2AA1F></v-text-field>
            </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Segundo Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title class="centered-title"> DATOS DESCRIPTIVOS DEL BLOQUE CONSTRUCTIVO - PISO</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="condicionFisica" 
              label="Condición Fisica" 
              v-model="form.id_tipo_piso" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="estadoConservacion" 
              label="Estado de Conservación" 
              v-model="form.id_estado_conservacion" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="validado" 
              label="Condición Patrimonial" 
              v-model="form.id_condicion_patrimonial" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Año Construcción" 
              v-model="form.anio_construccion" type="number"
              color = #F2AA1F></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Año Restauración" 
              v-model="form.anio_restauracion" 
              type="number"
              color = #F2AA1F></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Construcción (m2)" 
              v-model="form.area_construida" 
              type="number"
              color = #F2AA1F></v-text-field>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color fill-width">
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
              color = #F2AA1F 
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="4">                
            <v-select 
              :items="instalacioneEspeciales" 
              label="Instalaciones Especiales" 
              v-model="form.id_instalaciones_especiales" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Cuarto Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title>ELEMENTOS CONSTRUCTIVOS</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="estructura" 
              label="Estructura" 
              v-model="form.id_estructura" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F 
            ></v-select>
          </v-col>
          
          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="paredes" 
              label="Paredes" 
              v-model="form.id_paredes" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="cubierta" 
              label="Cubierta" 
              v-model="form.id_cubierta" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="acabadosVivienda" 
              label="Acabados Vivienda" 
              v-model="form.id_acabados_vivienda" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Quinto Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title>ACABADOS EXTERIORES</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="revParedes" 
              label="Revestimiento Paredes" 
              v-model="form.id_revestimiento_paredes" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="revCubierta" 
              label="Revestimiento Cubierta" 
              v-model="form.id_revestimiento_cubierta" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="ventanas" 
              label="Marco Ventanas" 
              v-model="form.id_marco_ventanas" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="vidrios" 
              label="Vidrios" 
              v-model="form.id_vidrios" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              :items="puertas" 
              label="Puertas" 
              v-model="form.id_puertas" 
              item-text="name" 
              item-value="value"
              color = #F2AA1F
            ></v-select>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Sexto Bloque -->
    <v-card class="mb-3 block-color fill-width">
      <v-card-title>PERMISO DE CONSTRUCCIÓN</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Permiso de Construcción" 
              v-model="form.permiso_construccion"
              color = #F2AA1F></v-text-field>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <v-row justify="center">
      <v-col cols="auto">
        <v-btn color=#668A4C style="color: white;" @click="submitForm">Guardar</v-btn>
      </v-col>
    </v-row>
    
  </v-container>
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
          { name: 'EN ESTRUCTURA', value: 2 },
          { name: 'TERMINADOS', value: 3 }, 
          { name: 'RECONSTRUÍDA', value: 4 }     
        ],

        estadoConservacion: [ 
          { name: 'MUY BUENO', value: 1 }, 
          { name: 'BUENO', value: 2 },
          { name: 'REGULAR', value: 3 }, 
          { name: 'MALO', value: 4 }     
        ],   
     
        ocupacionBloque: [ 
          { name: 'INFORMACIÓN NO DISPONIBLE', value: 1 }, 
          { name: 'INDUSTRIAL', value: 2 }, 
          { name: 'COMERCIAL', value: 3 }, 
          { name: 'DE SERVICIOS', value: 4 }, 
          { name: 'RESIDENCIAL', value: 5 }, 
          { name: 'RESIDENCIAL (INT. SOCIAL)', value: 6 }, 
          { name: 'DE EQUIPAMIENTO', value: 7 }, 
          { name: 'AGROPECUARIO', value: 8 }, 
          { name: 'FORESTAL', value: 9 }, 
          { name: 'ACUÍCOLA', value: 10 }, 
          { name: 'PROTECCIÓN ECOLÓGICA', value: 11 }, 
          { name: 'MÚLTIPLE', value: 12 }, 
        ],   

        instalacioneEspeciales: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ASCENSOR', value: 2 }, 
          { name: 'CIRCUITO CERRADO DE TV', value: 3 }, 
          { name: 'MONTACARGAS', value: 4 }, 
          { name: 'SISTEMA ALTERNATIVO DE E.E.', value: 5 }, 
          { name: 'SISTEMA CENTRAL DE AIRE ACONDICIONADO', value: 6 }, 
          { name: 'SISTEMA CONTRA INCENDIOS', value: 7 }, 
          { name: 'SISTEMA DE GAS CENTRALIZADO', value: 8 }, 
          { name: 'SISTEMA DE VENTILACIÓN MECÁNICA', value: 9 }, 
          { name: 'SISTEMA DE VOZ Y DATOS', value: 10 },      
        ],   

        estructura: [ 
          { name: 'MAMPOSTERÍA AUTOPORTANTE', value: 1 }, 
          { name: 'ADOBE', value: 2 }, 
          { name: 'BLOQUE', value: 3 }, 
          { name: 'LADRILLO', value: 4 }, 
          { name: 'PIEDRA', value: 5 }, 
          { name: 'TAPIAL', value: 6 }, 
          { name: 'ACERO', value: 7 }, 
          { name: 'CAÑA GUADÚA', value: 8 }, 
          { name: 'HORMIGÓN ARMADO', value: 9 }, 
          { name: 'MADERA COMÚN', value: 10 }, 
          { name: 'METAL Y HORMIGÓN', value: 11 }, 
          { name: 'MADERA Y HORMIGÓN', value: 12 }, 
          { name: 'PILOTAJE DE HORMIGÓN ARMADO', value: 13 }, 
          { name: 'HIERRO', value: 14 }, 
          { name: 'A PORTICADO', value: 15 }, 
          { name: 'SOPORTANTE', value: 16 }, 
          { name: 'MIXTA', value: 17 },     
        ],

        paredes: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ADOBE', value: 2 }, 
          { name: 'BAHAREQUE', value: 3 }, 
          { name: 'BLOQUE', value: 4 }, 
          { name: 'CAÑA GUADÚA', value: 5 }, 
          { name: 'LADRILLO', value: 6 }, 
          { name: 'GYPSUM', value: 7 }, 
          { name: 'HORMIGÓN PREFABRICADO', value: 8 }, 
          { name: 'MADERA COMÚN', value: 9 }, 
          { name: 'MADERA PROCESADA FINA', value: 10 }, 
          { name: 'MALLA', value: 11 }, 
          { name: 'LONA', value: 12 }, 
          { name: 'PIEDRA', value: 13 }, 
          { name: 'TAPIAL', value: 14 }, 
          { name: 'HORMIGÓN ARMADO', value: 15 }, 
          { name: 'FIBRA CEMENTO', value: 16 },        
        ],

        cubierta: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ACERO', value: 2 }, 
          { name: 'ASBESTO CEMENTO', value: 3 }, 
          { name: 'CAÑA GUADÚA', value: 4 }, 
          { name: 'CHOVA', value: 5 }, 
          { name: 'HIERRO', value: 6 }, 
          { name: 'LOSA HORMIGÓN ARMADO', value: 7 }, 
          { name: 'MADERA COMÚN', value: 8 }, 
          { name: 'MADERA PROCESADA FINA', value: 9 }, 
          { name: 'PALMA, PAJA', value: 10 }, 
          { name: 'POLICARBONATO', value: 11 }, 
          { name: 'STEEL PANEL', value: 12 }, 
          { name: 'TEJA', value: 13 }, 
          { name: 'ZINC', value: 14 }, 
          { name: 'ESTEREOESTRUCTURA', value: 15 },    
        ],

        acabadosVivienda: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'TRADICIONAL', value: 2 }, 
          { name: 'BÁSICO', value: 3 }, 
          { name: 'ECONÓMICO', value: 4 }, 
          { name: 'BUENO', value: 5 }, 
          { name: 'LUJO', value: 6 },       
        ],

        revParedes: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ADOBE', value: 2 }, 
          { name: 'BAHAREQUE', value: 3 }, 
          { name: 'BLOQUE', value: 4 }, 
          { name: 'CAÑA GUADÚA', value: 5 }, 
          { name: 'LADRILLO', value: 6 }, 
          { name: 'GYPSUM', value: 7 }, 
          { name: 'HORMIGÓN PREFABRICADO', value: 8 }, 
          { name: 'MADERA COMÚN', value: 9 }, 
          { name: 'MADERA PROCESADA FINA', value: 10 }, 
          { name: 'MALLA', value: 11 }, 
          { name: 'LONA', value: 12 }, 
          { name: 'PIEDRA', value: 13 }, 
          { name: 'TAPIAL', value: 14 }, 
          { name: 'HORMIGÓN ARMADO', value: 15 }, 
          { name: 'FIBRA CEMENTO', value: 16 },        
        ],
        
        revCubierta: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ACERO', value: 2 }, 
          { name: 'ASBESTO CEMENTO', value: 3 }, 
          { name: 'CAÑA GUADÚA', value: 4 }, 
          { name: 'CHOVA', value: 5 }, 
          { name: 'HIERRO', value: 6 }, 
          { name: 'LOSA HORMIGÓN ARMADO', value: 7 }, 
          { name: 'MADERA COMÚN', value: 8 }, 
          { name: 'MADERA PROCESADA FINA', value: 9 }, 
          { name: 'PALMA, PAJA', value: 10 }, 
          { name: 'POLICARBONATO', value: 11 }, 
          { name: 'STEEL PANEL', value: 12 }, 
          { name: 'TEJA', value: 13 }, 
          { name: 'ZINC', value: 14 }, 
          { name: 'ESTEREOESTRUCTURA', value: 15 },      
        ],

        ventanas: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ALUMINIO ANODIZADO', value: 2 }, 
          { name: 'HIERRO, VENTANA ENROLLABLE', value: 3 }, 
          { name: 'MADERA COMÚN', value: 4 }, 
          { name: 'MADERA TRATADA', value: 5 }, 
          { name: 'PLÁSTICO PREFORMADO PVC', value: 6 }, 
          { name: 'ALUMINIO BRONCE / COMÚN', value: 7 }, 
          { name: 'CAÑA', value: 8 }, 
          { name: 'MADERA MALLA', value: 9 },    
        ],

        vidrios: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'MALLA', value: 2 }, 
          { name: 'CATEDRAL, ESMERILADO', value: 3 }, 
          { name: 'VIDRIO COMÚN (CLARO)', value: 4 }, 
          { name: 'BRONCE, COLOR', value: 5 }, 
          { name: 'TEMPLADO, LAMINADO, REFLECTIVO', value: 6 }, 
          { name: 'VITRALES', value: 7 },
        ],

        puertas: [ 
          { name: 'NO TIENE', value: 1 }, 
          { name: 'ALUMINIO Y VIDRIO', value: 2 }, 
          { name: 'HIERRO', value: 3 }, 
          { name: 'MADERA CON HIERRO', value: 4 }, 
          { name: 'MADERA CON VIDRIO', value: 5 }, 
          { name: 'MADERA TAMBORADA', value: 6 }, 
          { name: 'MADERA PANELADA', value: 7 }, 
          { name: 'MALLA GALVANIZADA', value: 8 }, 
          { name: 'METÁLICA, ENROLLABLE', value: 9 }, 
          { name: 'PLÁSTICO PREFORMADO', value: 10 }, 
          { name: 'TOL / VIDRIO', value: 11 }, 
          { name: 'VIDRIO TEMPLADO / LAMINADO', value: 12 }, 
          { name: 'MADERA COMÚN', value: 13 }, 
          { name: 'CAÑA', value: 14 }, 
          { name: 'MADERA FINA', value: 15 }, 
          { name: 'MADERA MALLA', value: 16 },     
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
.container {
  background-color: #ACCC7B; /* Fondo */
  border: 0; /* Borde personalizado */
  padding: 0; /* Eliminar padding */
  margin: 0; /* Eliminar margen */
}

.block-color {
  background-color: #F1ECE7;
  color: #668A4C; 
}

.custom-text-color {
  color: #F1ECE7; 
}

.vertical-divider { 
  height: 30px; /* Altura de la línea */ 
  align-self: center; 
  margin: 0 16px; /* Espaciado a los lados de la línea */ 
  border-left: 2px solid #668A4C;
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
  