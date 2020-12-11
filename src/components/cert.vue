<template>
  <div>
    <v-card
      id="my-card"
      class="mx-auto text-center py-5"
      width="900"
      justify="center"
      outlined
      v-for="user in users"
      :key="user.age"
    >
      <div class="display-2 text--white primary">Certificate of Completion</div>
      <v-spacer></v-spacer>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 text-center py-8">
            This is to certify that {{ user.firstName }} {{ user.lastName }} successfully
            <br />
            completed his senior secondary education on {{ new Date().getFullYear() }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="footer">
        <v-spacer></v-spacer>
        <v-avatar width="160" height="150" class="primary">
          <img src="../assets/logo.png" alt="" />
        </v-avatar>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <div id="preview" class="text-center"></div>

    <v-btn class="primary my-8" text @click="imageConversion"> Convert </v-btn>
    <template>
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar">
          Right click on the image to download your Certificate
          <template v-slot:action="{ attrs }">
            <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
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
      snackbar: false,
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
        onrendered: function (canvas) {
          preview.append(canvas);
          getCanvas = canvas;
        },
      });
      document.getElementById("my-card").style.display = "none";
      this.snackbar = true;
    },
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
