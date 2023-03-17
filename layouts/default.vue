<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title >TraveloDesk</v-toolbar-title>
      <v-spacer />
      <v-spacer></v-spacer>
      <v-btn text to="/loginuser" value="user">
        USER
      </v-btn>
      <v-btn text  to="/logindriver" value="Driver">
        Driver
      </v-btn>
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
}
</script>
