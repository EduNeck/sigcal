<template>
  <v-content>
    <v-container class="mt-10">
      <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <!-- Inicio --> 
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="auto">              
              <v-btn color="blue lighten-1" 
                     density="compact" 
                     @click="$router.push('/menu-urbano')">Menu Urbano</v-btn>
            </v-col>

            <v-col cols="auto">              
              <v-btn color="green lighten-1" density="comfortable">Menu Rural</v-btn>
            </v-col>
          </v-row>
        </v-container>
      <!-- Fin --> 
      </v-form>
    </v-sheet>
    </v-container>
  </v-content>
</template>
  
  <script>
  export default {
    name: 'MenuIngreso',
  };
  </script>
  