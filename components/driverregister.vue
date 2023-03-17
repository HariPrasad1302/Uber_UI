<template>
  <v-content>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                 <v-toolbar dark color="primary">
                    <v-toolbar-title>Driver Registration</v-toolbar-title>
                 </v-toolbar>
                 <v-card-text>
                    <v-form>
                      <v-text-field
                      name="name"
                      label="Driver Name"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    label="Email"
                    type="email"
                    required
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                    </v-form>
                 </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" to="/logindriver">Back</v-btn>
                    <v-btn color="primary" @click="register()">Register</v-btn>
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
    email: '',
    password: '',
  }
},
methods:{
  async register(){
    this.$router.push("/logindriver")
  }

  }
}
</script>

<style></style>
