<template>
  <div>
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" class="img">
        <v-row class="fill-height" align="center" justify="center">
          <div>
            <div justify="center" align="center">
              <img src="../assets/logo1.png" alt="" />
            </div>
            <div class="display-3 text text-center">
              Education Is The Key
              <br />
              To Success And
              <br />
              Prosperity
            </div>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1472772224448-b24d00409675?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1473655551229-a39d1a982885?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  },
};
</script>

<style scoped>
.img {
  filter: grayscale(100%);
}
.text {
  font-weight: 700;
}
</style>
