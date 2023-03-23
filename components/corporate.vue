<template>
    <v-content>
      <v-text-title><h1 style="text-align: center;" class="font-bold text-3xl">Corporate User Registration </h1></v-text-title>
      <br>
       <v-container fluid fill-height>
          <v-layout align-center justify-center>
             <v-flex xs12 sm8 md5>
                      <v-form>
                        <v-row> <v-col>
                          <div class="text-subtitle-1 text-medium-emphasis">First  name</div>
                        <v-text-field
                          density="compact"
                          placeholder="Enter your first name "
                          prepend-inner-icon="mdi-account-circle"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      
                      <v-col>
                        <div class="text-subtitle-1 text-medium-emphasis">Last  name</div>
                        <v-text-field
                          density="compact"
                          placeholder="Enter your Last name "
                          prepend-inner-icon="mdi-account-circle"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                     </v-row>
                     <v-row>
                        <v-col>
                            <div class="text-subtitle-1 text-medium-emphasis">Firm  name</div>
                        <v-text-field
                          density="compact"
                          placeholder="Enter your firm name "
                          prepend-inner-icon="mdi-account-circle"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                        <v-col>
                            <div class="text-subtitle-1 text-medium-emphasis">Location</div>
  
                        <v-text-field
                          density="compact"
                          placeholder="Enter the Location"
                          prepend-inner-icon="mdi-account-outline"
                          variant="outlined"
                        ></v-text-field>
                        </v-col>
                     </v-row>
                     
                     <div class="text-subtitle-1 text-medium-emphasis">Email ID</div>
  
                        <v-text-field
                          density="compact"
                          placeholder="Enter Email ID"
                          prepend-inner-icon="mdi-email-outline"
                          variant="outlined"
                        ></v-text-field>
                   
                      <div class=" text-xl">Provide the Business related Details</div>
                      <br>
                      
                      <v-row>
                        <v-col>
                      <div class="text-1xl">GST number</div>
                      <v-text-field
                        
                        density="compact"
                          placeholder="Enter the GST Number"
                          prepend-inner-icon="mdi-account-outline"
                          variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <div class="text-1xl">Firm PAN No</div>
                      <v-text-field
                      
                        density="compact"
                          placeholder="Enter the Firm Pan Number"
                          prepend-inner-icon="mdi-account-outline"
                          variant="outlined"
                      ></v-text-field>
                    </v-col>
                    </v-row>
                    <div  class="text-1xl">Nature Of Business</div>
                   
                    <v-select
                
                       
                        :items="['others']"
                        label="Select the NAture of Business"
                      ></v-select>
                  
                     <div class="text-subtitle-1 text-medium-emphasis">Password</div>
                        <v-text-field
                          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                          :type="visible ? 'text' : 'password'"
                          density="compact"
                          placeholder="Enter your password"
                          prepend-inner-icon="mdi-lock-outline"
                          variant="outlined"
  
                        ></v-text-field>
  
                     <v-row>
                      <v-col>
  
                        <div class="text-subtitle-1 text-medium-emphasis">Phone Number</div>
  
                        <v-text-field
                          density="compact"
                          placeholder="Enter the phone number"
                          prepend-inner-icon="mdi-phone"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      </v-row>
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-btn text color="black" @click="register()">SUBMIT</v-btn>
                        <v-spacer></v-spacer>
                      </v-row>  
                      
                      </v-form>
  
  
             </v-flex>
          </v-layout>
       </v-container>
    </v-content>
  </template>
  <script>
  export default {
    data() {
      return {
        userType: '',
        rules: {
          name: [
            { required: true, message: 'Please input your name!', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'Please input your email!', trigger: 'blur' },
            { type: 'email', message: 'The input is not a valid email!', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Please input your password!', trigger: 'blur' },
            { min: 6, message: 'The password must be at least 6 characters long!', trigger: 'blur' },
          ],
        },
        name: '',
        phone: '',
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        this.$router.push("/logincorporate")
      },
    }
  
  }
  </script>
  
  
  
  <style></style>
  