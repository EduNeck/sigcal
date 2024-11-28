<template>
    <v-app>
        <v-card width="400" class="mx-auto mt-10">
        <v-card-title class="pb-0">
            <h1>Login</h1>
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
    </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showPassword: false
    }
  }
}
</script>