<template>
  <v-app class="background">
    <v-main>
      <router-view></router-view>
    </v-main>    
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.background {
  background-color: #bbbbbb; /* Cambia este color al que desees */
  min-height: 100vh;
}
</style>
