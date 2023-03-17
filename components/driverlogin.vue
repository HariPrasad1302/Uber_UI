<template>
    <v-content>
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
               <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                     <v-toolbar-title>Driver Login form</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                     <v-form>
                      <div class="text-subtitle-1 text-medium-emphasis">DRIVER EMAIL</div>

                      <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                      ></v-text-field>

                      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password

                        <a
                          class="text-caption text-decoration-none text-blue"
                          href="#"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Forgot login password?</a>
                      </div>

                      <v-text-field
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"

                      ></v-text-field>
                     </v-form>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn color="primary" @click="login()">Login</v-btn>
                     <v-btn color="primary" to="/register_driver">Register</v-btn>
                  </v-card-actions>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-content>

</template>

<script>
export default {
  name: 'Login',
  props: {
     source: String,
  },
  data() {
    return {
      visible: false,
    }
  },
methods:{
  async login(){
    this.$router.push("/driverdetails")
  }

  }
};
</script>

<style></style>
