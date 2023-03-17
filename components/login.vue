<template>
    <v-container class="bg-surface-variant">
        <br><br><br><br><br>
      <v-row
        class="mb-6"
        no-gutters
      >
      <v-spacer></v-spacer>
      <v-card>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-card-text>
              <v-card-title class="text-center">
                <a class="display-2" style="color: black;">Login as a Driver</a>
              </v-card-title>
              <v-card-text class="text-center">
                <v-card-subtitle class="text-center">
                  <v-card-title class="text-center">
                  </v-card-title>
                </v-card-subtitle>
                <v-btn justify-center align-center to="/logindriver">
                    <v-icon>mdi-account-plus</v-icon>
                    <v-card-title class="text-center">Driver Login</v-card-title>
                </v-btn>
              </v-card-text>
            </v-card-text>
        
          </v-sheet>
        </v-col>
    </v-card>
    <v-spacer></v-spacer>
    <v-card>
  
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-card-text>
                <v-card-title class="text-center">
                  <a class="display-2" style="color: black;">User Login and Create a Ride</a>
                </v-card-title>
                <v-card-text class="text-center">
                  <v-card-subtitle class="text-center">
                    <v-card-title class="text-center">
                    </v-card-title>
                  </v-card-subtitle>
                  <v-btn justify-center align-center to="/loginuser">
                      <v-icon>mdi-account-plus</v-icon>
                      <v-card-title class="text-center">User Login</v-card-title>
                  </v-btn>
                </v-card-text>
              </v-card-text>
          </v-sheet>
        </v-col>
    </v-card>
    <v-spacer/>
      </v-row>
    </v-container>
</template>