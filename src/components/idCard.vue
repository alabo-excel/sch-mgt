<template>
  <div>
    <div id="nameForm">
      <v-row justify="center">
        <v-col cols="10">
          <v-file-input id="imgInput" @change="getPath"></v-file-input>
        </v-col>
        <v-col cols="10">
          <v-text-field
            v-model="name"
            label="Full name"
            color="primary"
          ></v-text-field
        ></v-col>
      </v-row>
    </div>
    <v-card
      id="my-card"
      class="mx-auto text-center"
      max-width="344"
      justify="center"
      outlined
      height="500"
    >
      <div width="5">
        <img width="100" src="../assets/logo.png" alt="" />
      </div>
      <v-avatar size="128" class="special primary">
        <img :src="this.img" alt="" />
      </v-avatar>
      <v-spacer></v-spacer>

      <v-list-item three-line>
        <v-list-item-content v-if="name === null">
          <v-list-item-title class="headline mb-1 text-center">
            Jonh Doe
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            SS3 B
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content v-else>
          <v-list-item-title class="headline mb-1 text-center">
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            SS3 B
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="primary footer"> </v-card-actions>
    </v-card>

    <div id="preview" class="text-center "></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: null,
      name: null,
    };
  },
  methods:{
    getPath() {
      var image = document.getElementById('imgInput').value;
      console.log(image)
      this.img = image;
    },
  }
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
