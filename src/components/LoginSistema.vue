<template>
  <v-container fill-height class="d-flex align-center justify-center">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="pb-0 d-flex justify-center title-background">
            <h3>INGRESO</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field 
                label="Usuario" 
                prepend-icon="mdi-account-circle"
              />
              <v-text-field 
                :type="showPassword ? 'text' : 'password'" 
                label="Contraseña"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-row justify="center" class="w-100">
              <v-col cols="auto" class="d-flex justify-center">              
                <!-- <v-btn color="success">Registro</v-btn> -->                             
                <v-btn color="info" @click="$router.push('/menu-ingreso')">Ingreso</v-btn>
              </v-col>
            </v-row>              
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

  <script>
    export default {
      name: 'LoginSistema',
      data() {
        return {
          showPassword: false,
        }
      }
    }
  </script>
  
  <style scoped>

  .full-height-main {
    height: 100vh; /* Alto completo de la ventana */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title-background {
    background-color:#494a53 ; /* Color de fondo (puedes ajustarlo) */
    color: #F1ECE7; /* Color del texto */
    padding: 10px; /* Espacio alrededor del texto */
    border-radius: 4px; /* Esquinas redondeadas */
    text-align: center;
    border: 0.5px solid #090909
  }

  </style>
  