<template>
  <v-app>
    <v-app-bar app extensionHeight="35px" class="dark darken-3 px-2">
      <v-toolbar-title>Hello Driver</v-toolbar-title>
      <v-spacer />
      <v-img src="../assets/icons8-driver-50.png" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'driver_layout',
}
</script>
