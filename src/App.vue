<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title style="font-size: 20px; color: white;">Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>
    <v-content>
      <v-card width="400" class="mx-auto mt-10">
        <v-card-title class="pb-0">
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
            <v-btn color="success">Registro</v-btn>
            <v-btn color="info">Ingreso</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    <v-footer color = "primary lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>SIGCAL</strong>
        </v-col>
      </v-row>
    </v-footer>   
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        showPassword: false,
      }
    }
  }
</script>