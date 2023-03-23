<template>
  <v-content>
    <br><br>
   <v-text-title><h1 style="text-align: center;" class="font-bold text-3xl">User Login </h1></v-text-title>
      
    <v-container fluid fill-height>
       <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>

                   <v-form>

                      <div class="text-subtitle-1 text-medium-emphasis ">USER EMAIL</div>

                      <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                      ></v-text-field>

                      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>

                      <v-text-field
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"

                      ></v-text-field>
                      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        <v-btn text color="black" to="/profile_user">Login</v-btn>
                        <v-btn text color="black" to="/register_user">Register</v-btn>
                        <v-spacer></v-spacer>

                        <a
                          class="text-caption text-decoration-none text-blue"
                          href="#"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Forgot login password?</a>
                      </div>
               
                   </v-form>

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
};
</script>

<style></style>
