<template>
  <v-container fill-height class="d-flex align-center justify-center ">    
    <!-- Inicio -->
    <v-card class="card-style custom-background">
      <v-card-title class="pb-0 d-flex justify-center title-background">
        <h3>MENUS</h3>
      </v-card-title>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto" class="mb-2 d-flex flex-column align-items-center">
            <v-img src="@/assets/login-urbano.png" height="175" width="250" class="mb-2"></v-img>
            <v-btn color=#114358 
                    density="compact" 
                    style="color: white;"
                    @click="$router.push('/menu-urbano')">URBANO                         
            </v-btn>                  
          </v-col>

          <v-col cols="auto" class="mb-2 d-flex flex-column align-items-center">
            <v-img src="@/assets/login-rural.png" height="175" width="250" class="mb-2"></v-img>
            <v-btn color=#668A4C 
                    density="compact" 
                    style="color: white;"
                    @click="$router.push('/menu-rural')">RURAL
            </v-btn>                  
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row justify="center" class="w-100">
          <v-col cols="auto" class="d-flex justify-center">
            <v-btn color=#F2AA1F style="color: white;" @click="$router.push('/')">Salir</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <!-- Fin -->
  </v-container>
</template>
  
<script>
export default {
  name: 'MenuIngreso',
};
</script>

<style scoped>
.custom-background {
  background-color: #A9A9A9; 

}

.full-height-container {
  height: 100vh; /* Asegura que ocupe el alto completo de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.full-height-sheet {
  width: 100%;
  max-width: 600px; /* Limita el ancho máximo */
}

.title-background {
  background-color: #494a53; /* Color de fondo (puedes ajustarlo) */ 
  color: white; /* Color del texto */ 
  padding: 2px; /* Espacio alrededor del texto */   
  text-align: center; 
}

.card-style{  
  border-radius: px; 
  border: 0.5px solid #090909
}
</style>
