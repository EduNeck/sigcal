<template>
    <v-container class="d-flex justify-center align-center no-padding" style="min-height: 100vh;">
      <v-card class="mx-auto block-color" max-width="800">
        <v-card-title class="d-flex justify-center"><h3>VALORES PERITAJE URBANO</h3></v-card-title>
        
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Predio"
                  v-model="form.predio"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select
                  label="Tipo de Valor"
                  v-model="form.tipo_valor"
                  :items="tipoValores"
                  :rules="[rules.required]"
                  color="#F2AA1F"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-checkbox
                  v-model="form.mandatorio"
                  :label="form.mandatorio ? 'Sí' : 'No'"
                  color="#F2AA1F"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Valor Suelo"
                  v-model="form.valor_suelo"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Valor Construcción"
                  v-model="form.valor_construccion"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Valor Adicionales"
                  v-model="form.valor_adicionales"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Valor Especiales"
                  v-model="form.valor_especiales"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  label="Valor Total"
                  v-model="form.valor_total"
                  type="number"
                  :rules="[rules.required, rules.numeric]"
                  color="#F2AA1F"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Observaciones"
                  v-model="form.observaciones"
                  :rules="[rules.required]"
                  color="#F2AA1F"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="guardar">Guardar</v-btn>
          <v-btn color="primary" @click="navigateToMenuUrbano" class="mx-2">Salir</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'FormValoresPeritajeUrbano',
    data() {
      return {
        valid: false,
        form: {
          predio: '',
          tipo_valor: '',
          mandatorio: false,
          valor_suelo: '',
          valor_construccion: '',
          valor_adicionales: '',
          valor_especiales: '',
          valor_total: '',
          observaciones: ''
        },
        tipoValores: [
          'VALORACIÓN POR PERITAJE',
          'COMERCIAL'
        ],
        rules: {
          required: value => !!value || 'Requerido.',
          numeric: value => !isNaN(value) || 'Debe ser un número.'
        }
      };
    },
    methods: {
      nuevoForm() {
        this.$refs.form.reset();
        this.form = {
          predio: '',
          tipo_valor: '',
          mandatorio: false,
          valor_suelo: '',
          valor_construccion: '',
          valor_adicionales: '',
          valor_especiales: '',
          valor_total: '',
          observaciones: ''
        };
      },
      guardar() {
        if (this.$refs.form.validate()) {
          // Lógica para guardar los datos
          console.log('Datos del formulario:', this.form);
        }
      },
      navigateToMenuUrbano() { 
        this.$router.push('/menu-urbano'); 
      }
    }
  };
  </script>
  
  <style scoped>
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .block-color {
    background-color: #F1ECE7;
    color: #114358; 
  }
  
  .custom-text-color {
    color: #F1ECE7; 
  }
  
  .no-padding {
    padding: 0 !important;
  }
  </style>
  