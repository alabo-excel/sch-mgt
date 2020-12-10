<template>
  <div>
    <v-app-bar app>
      <div class="ml-5">
        <img src="../assets/logo.png" alt="" />
      </div>
      <v-spacer></v-spacer>
      <div class="mr-2" @click="dialog = !dialog">
            <p>Login</p>
      </div>
      <div @click="modal = !modal">
            <p>Sign Up</p>
      </div>
    </v-app-bar>

    <v-row justify="center">
    <v-dialog
      v-model="modal"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Username*"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
        <v-btn
            text
            @click="modal = false; dialog = true"
          >
            Login
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="modal = false"
          >
            Close
          </v-btn>
          <v-btn
            text
            @click="modal = false; signupUser"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
        <v-btn
            text
            @click="dialog = false; modal = true"
          >
            Sign Up
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            text
            @click="dialog = false; loginUser"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
  </div>
</template>

<script>
export default {
  data: () => ({
      modal: false,
      dialog: false,
      username: "",
      password: "",
      email: ""
    }),
    methods:{
      loginUser(){},
      signupUser(){}
    }
};
</script>

<style scoped>
img {
  width: 110px;
}
</style>
