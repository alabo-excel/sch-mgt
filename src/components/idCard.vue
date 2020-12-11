<template>
  <div>
    <v-card
      id="my-card"
      class="mx-auto text-center"
      max-width="344"
      justify="center"
      outlined
      height="500"
      v-for="user in users"
      :key="user.age"
    >
      <div width="5">
        <img width="100" src="../assets/logo.png" alt="" />
      </div>
      <v-avatar size="128" class="special primary">
        <img :src="user.image" alt="" />
      </v-avatar>
      <v-spacer></v-spacer>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 text-center">
            {{ user.firstName }} {{ user.lastName }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            {{ user.class }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="primary footer">
        <v-list rounded>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary"> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>schmgt@example.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary"> mdi-map-marker </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>1400 Main Street</v-list-item-title>
              <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item></v-list
        >
      </v-card-actions>
    </v-card>

    <div id="preview" class="text-center"></div>

    <v-btn color="primary darken-1" text @click="imageConversion"> Convert </v-btn>
  <template>
  <div class="text-center ma-2">
    
    <v-snackbar
      v-model="snackbar"
    >
      Right click on the image to download your Id card
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false
    };
  },
  methods: {
    getPath() {
      var image = document.getElementById("imgInput").value;
      console.log(image);
      this.img = image;
    },
    imageConversion() {
      var preview = document.getElementById("preview");
      var element = document.getElementById("my-card");
      html2canvas(element, {
        onrendered: function(canvas) {
          preview.append(canvas);
          getCanvas = canvas;
        },
      });
      document.getElementById("my-card").style.display = "none";
      this.snackbar = true
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped>
.v-avatar img,
.v-avatar svg,
.v-avatar .v-icon,
.v-avatar .v-image,
.v-avatar .v-responsive__content {
  border-radius: 100%;
}
.footer {
  height: 170px;
}
</style>
