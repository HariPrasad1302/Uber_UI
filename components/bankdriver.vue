<template>
  <v-content>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                 <v-toolbar dark color="primary">
                    <v-toolbar-title justify-center align-center>BANK DETAILS</v-toolbar-title>
                 </v-toolbar>
                 <v-card-text>
                    <v-form>
                      <v-text-field
                      name="phone"
                      label="Enter your PAN number"
                      type="text"
                    ></v-text-field>
                    <v-file-input label="Upload PAN CARD"></v-file-input>
                    <v-select
                      label="Select"
                      :items="['STATE BANK OF INDIA', 'INDIAN OVERSEAS BANK', 'CANARA BANK', 'AXIS BANK', 'ICICI BANK', 'HDFC BANK', 'CITY UNION BANK', 'KARURVAISIA BANK','KOTAK BANK','INDUSLAND BANK', 'IDBI BANK','BANK OF INDIA', 'BANK OF BARODA']"
                    ></v-select>

                    <v-text-field
                    v-model="name"
                    label="Enter Name as per in the account"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="account"
                    label="Enter the Account Number"
                    type="text"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="ifsc"
                    label="Enter the IFSC Code"
                    type="text"
                    required
                    ></v-text-field>

                    </v-form>
                 </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" to="/profiledriver">Next</v-btn>
                 </v-card-actions>
              </v-card>
           </v-flex>
        </v-layout>
     </v-container>
  </v-content>
</template>



<style></style>
