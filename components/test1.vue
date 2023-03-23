<template>
    <v-container>
      <v-switch v-model="registerWithBank" label="Register with bank" color="primary"></v-switch>
      <v-card v-if="registerWithBank">
        <!-- Bank registration form fields go here -->
      </v-card>
      <v-card v-else>
        <!-- Standard registration form fields go here -->
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registerWithBank: false
      }
    }
  }
  </script>