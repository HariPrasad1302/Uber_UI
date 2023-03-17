<template>
  <v-content>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                 <v-toolbar dark color="primary">
                    <v-toolbar-title justify-center align-center>Driver Details</v-toolbar-title>
                 </v-toolbar>
                 <v-card-text>
                    <v-form>
                      <v-text-field
                      name="phone"
                      label="Enter your phone number"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                    v-model="aadhar"
                    label="Enter Aadhar ID"
                    type="aadhar"
                    required
                    ></v-text-field>
                    <v-file-input label="Upload Aadhar ID"></v-file-input>

                    <v-text-field
                    v-model="License"
                    label="Enter License number"
                    type="text"
                    required
                    ></v-text-field>
                    <v-file-input label="Upload License "></v-file-input>


                    </v-form>
                 </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" to="/driverbank">Next</v-btn>
                 </v-card-actions>
              </v-card>
           </v-flex>
        </v-layout>
     </v-container>
  </v-content>
</template>



<style></style>
