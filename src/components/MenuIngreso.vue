<template>
  <v-content class="custom-background">
    <v-container class="mt-10">
      <v-sheet class="mx-auto" width="300">
        <v-form @submit.prevent>
          <!-- Inicio --> 
          <v-card>
            <v-card-title class="pb-0 d-flex justify-center"><h3>MENUS</h3></v-card-title>
            <v-container>
              <v-row align="center" justify="center" direction="column">
                <v-col cols="auto" class="mb-2">              
                  <v-btn color="primary" 
                         density="compact" 
                         style="color: white;"
                         @click="$router.push('/menu-urbano')">Urbano                         
                  </v-btn>
                </v-col>

                <v-col cols="auto" class="mb-2">              
                  <v-btn color="green" 
                         density="compact" 
                         style="color: white;"
                         @click="$router.push('/menu-rural')">Rural
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row justify="center" class="w-100">
                <v-col cols="auto">
                  <v-btn color="grey" style="color: white;" @click="$router.push('/')">Salir</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
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

<style scoped>
.custom-background {
  background-color: #f5f5f5; 
}


</style>

