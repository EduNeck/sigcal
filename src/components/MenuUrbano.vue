<template>
    <v-content>
        <v-container class="mt-1">
            <!-- Botón que activa el menú --> 
            <v-menu offset-y> 
                <template v-slot:activator="{ on, attrs }"> 
                    <v-btn color="primary" dark v-bind="attrs" v-on="on"> 
                        Gestión Catastral
                    </v-btn> 
                </template> 
                <!-- Lista de opciones del menú --> 
                <v-list> 
                    <v-list-item @click="$router.push('/navegacion-predios')"> 
                        <v-list-item-title>Ingreso Predio</v-list-item-title>
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion2')"> 
                        <v-list-item-title>Listado Predial</v-list-item-title> 
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion3')"> 
                        <v-list-item-title>Gestion Documental</v-list-item-title> 
                    </v-list-item> 
                </v-list>                
            </v-menu>
            <!-- Reportes --> 
            <v-menu offset-y> 
                <template v-slot:activator="{ on, attrs }"> 
                    <v-btn color="primary" dark v-bind="attrs" v-on="on"> 
                        Reportes
                    </v-btn> 
                </template> 
                <v-list> 
                    <v-list-item @click="$router.push('/opcion1')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title>
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion2')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title> 
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion3')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title> 
                    </v-list-item> 
                </v-list>                
            </v-menu>
            <!-- Valoración --> 
            <v-menu offset-y> 
                <template v-slot:activator="{ on, attrs }"> 
                    <v-btn color="primary" dark v-bind="attrs" v-on="on"> 
                        Valoración
                    </v-btn> 
                </template> 
                <v-list> 
                    <v-list-item @click="$router.push('/opcion1')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title>
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion2')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title> 
                    </v-list-item> 
                    <v-list-item @click="$router.push('/opcion3')"> 
                        <v-list-item-title>Opcion Uno</v-list-item-title> 
                    </v-list-item> 
                </v-list>                
            </v-menu>              
            
            
        </v-container>
    </v-content>
</template>
<script>
  export default {
    name: 'MenuUrbano',
  };
</script>