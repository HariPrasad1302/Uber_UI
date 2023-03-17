<template>
  <v-container>
    <bankdriver/>
  </v-container>
</template>

<script>
export default {
 async mounted () {
    this.$vuetify.theme.dark = false
  },
}
</script>
