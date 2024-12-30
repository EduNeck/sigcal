<template>
  <v-container class="background" fluid fill-height>
    <v-row class="fill-height d-flex justify-center align-center">
      <v-col cols="12" md="8" lg="4">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field 
                label="Usuario"
                prepend-icon="mdi-account"
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
                <v-btn color="info" @click="$router.push('/')">Salir</v-btn>
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
.background {
  background-image: url('../assets/fondo-cayambe.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}

.fill-height {
  height: 100%;
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