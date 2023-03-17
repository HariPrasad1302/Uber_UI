<template>
  <v-content>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                 <v-toolbar dark color="primary">
                    <v-toolbar-title>User Registration</v-toolbar-title>
                 </v-toolbar>
                 <v-card-text>
                    <v-form>
                      <v-text-field
                      name="name"
                      label="Name"
                      type="text"
                      :rules="[rules.name]"
                    ></v-text-field>
                    <v-text-field
                    v-model="phone"
                    label="phone number"
                    type="text"
                    required
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
                    <v-btn color="primary" @click="register()">Register</v-btn>
                    <v-spacer></v-spacer>
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
data:()=>({
  name:'',
  phone:'',
  email:'',
  password:'',
  rules:{
    name:v =>!!v || 'Please enter your name',
    email: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email address',
  }
}),
methods:{
  async register(){
    this.$router.push("/loginuser")
  }

  }


};
</script>

<style></style>
