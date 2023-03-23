<template>
  <v-app> 
    <v-app-bar app color="black" :clipped-left="clipped" fixed>
      &ensp; &ensp; &ensp; 
      <v-toolbar-title><a style="color: white;" @click="home()">TraveloDesk</a></v-toolbar-title>
      <v-spacer />
      <v-spacer></v-spacer>
      <v-btn text color="white" to="/logincorporate" value="Login">
        Corporate
      </v-btn>
      <v-btn text color="white" to="/logindriver" value="Login">
        Driver
      </v-btn>
      <v-btn text color="white" to="/loginuser" value="Login">
        Login
      </v-btn>
      <v-btn text color="white" to="/register_user" value="SignUP">
        SignUP
      </v-btn>
      &ensp; &ensp; &ensp;
    </v-app-bar>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  async mounted () {
    this.$vuetify.theme.dark = false
  },
  watch: {
  },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false
    }
  },
  methods: {
    async home () {
      this.$router.push('/')
    }
  }

}
</script>
<style>
</style>
