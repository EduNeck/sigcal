<template>
    <v-content>
        <v-container class="mt-10">
            <v-app>
                <router-view></router-view>
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
                        <v-btn color="info" @click="$router.push('/menu-ingreso')">Ingreso</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-content>
            </v-app>
        </v-container>
    </v-content>

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