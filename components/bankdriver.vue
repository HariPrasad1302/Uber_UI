<template>
  <v-content>
   <br>
   <v-text-title><h1 style="text-align: center;" class="font-bold text-3xl">Bank Details</h1></v-text-title>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
                    <v-form>
                      <v-row>
                        <v-col>
                        <div class="text-subtitle-1 text-medium-emphasis">PAN Number</div>
                     <v-text-field
                       density="compact"
                       placeholder="Enter the PAN Number"
                       prepend-inner-icon="mdi-account-outline"
                       variant="outlined"
                     ></v-text-field>
                      </v-col>
                      <v-col>
                        <div class="text-subtitle-1 text-medium-emphasis">Upload Document</div>
                        <v-file-input label="Upload PAN CARD"></v-file-input>
                      </v-col>
                    </v-row>
                     
                    
                    <div class="text-subtitle-1 text-medium-emphasis">Select the Bank</div>
                    <v-select
                      label="Select"
                      :items="['STATE BANK OF INDIA', 'INDIAN OVERSEAS BANK', 'CANARA BANK', 'AXIS BANK', 'ICICI BANK', 'HDFC BANK', 'CITY UNION BANK', 'KARURVAISIA BANK','KOTAK BANK','INDUSLAND BANK', 'IDBI BANK','BANK OF INDIA', 'BANK OF BARODA']"
                    ></v-select>
                    <div class="text-subtitle-1 text-medium-emphasis">Driver Name</div>

                      <v-text-field
                        density="compact"
                        placeholder="Enter Name as per in the account"
                        prepend-inner-icon="mdi-account-circle"
                        variant="outlined"
                      ></v-text-field>
                      <v-row>
                        <v-col>
                          <div class="text-subtitle-1 text-medium-emphasis">Account Number</div>
                          <v-text-field
                        density="compact"
                        placeholder="Enter the Account Number"
                        prepend-inner-icon="mdi-account-circle"
                        variant="outlined"
                      ></v-text-field>
                        </v-col>
                        <v-col>
                          <div class="text-subtitle-1 text-medium-emphasis">IFSC CODE</div>

                      <v-text-field
                        density="compact"
                        placeholder="Enter the IFSC Code"
                        prepend-inner-icon="mdi-account-circle"
                        variant="outlined"
                      ></v-text-field>
                        </v-col>
                      </v-row>
                      <br>
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-btn text color="black" to="/driver_profile">Submit</v-btn>
                        <v-spacer></v-spacer>
                      </v-row>

                    </v-form>

                    <v-spacer></v-spacer>


           </v-flex>
        </v-layout>
     </v-container>
  </v-content>
</template>

<script>
export default {
   data: {
      name: '',
      account: '',
      ifsc: '',
   },
}
</script>


<style></style>
