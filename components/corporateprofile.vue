<template>
    <v-container>
    <v-card flat
        max-width="775"
        class="mx-auto">
    <v-card-text>
      <h1><b>My info</b></h1>   
                  <br>
  <!--             profile image          -->
  <v-card class="mx-auto" max-width="1000" tile>
    <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
    <v-row style="margin:2.5%;position:absolute; top: 130px">
                <v-list-item>
                 <v-list-item-avatar size="100">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="John"
                    >
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title" style="margin-top:40px;">Mr. JOSEPH VIJAY</v-list-item-title>
                    <v-list-item-subtitle>Corporate Monster | CEO</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
  </v-row>
  </v-card>
  <br><br><br><br>
    
        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-phone
              </v-icon>
            </v-list-item-icon>
    
            <v-list-item-content>
              <v-list-item-title>+91 9063978215</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
    
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-email
              </v-icon>
            </v-list-item-icon>
    
            <v-list-item-content>
              <v-list-item-title>preshcassey@example.com</v-list-item-title>
              <v-list-item-subtitle>Personal</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-account-circle
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>PAN NO:</v-list-item-subtitle>
              <v-list-item-title>20131224NHPQ</v-list-item-title>
              
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>LICENSE NO:</v-list-item-subtitle>
              <v-list-item-title>TN6020222028</v-list-item-title>
              
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>AADHAR NO:</v-list-item-subtitle>
              <v-list-item-title>412562789876</v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">
                mdi-bank
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>BANK NAME:</v-list-item-subtitle>
              <v-list-item-title>State Bank of India</v-list-item-title>
              
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>ACCOUNT NO:</v-list-item-subtitle>
              <v-list-item-title>386019284929</v-list-item-title>
              
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>IFSC CODE:</v-list-item-subtitle>
              <v-list-item-title>SBIN0017359</v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
          <br>
        </v-list>
            <v-row
              align="center"
              justify="space-around"
            >
            <!--<v-btn
            tile click
            color="success"
            >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Edit
            </v-btn> -->
            <v-btn @click="greet()"
              depressed
              color="error">
              Delete
            </v-btn>               
            </v-row>
                  
        </v-card-text>
      </v-card>
    </v-container>
    </template>
  
    <script>
    export default {
      name: 'profile',
      data() {
        return {
          greet: false
        }
      },
      methods: {
        greet() {
          this.$router.push("/logincorporate")
        }
      }
    }
    </script>