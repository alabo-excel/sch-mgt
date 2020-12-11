<template>
  <div class="home">
    <div>
      <NavBar />
      <v-row>
        <v-col cols="2">
          <navigation />
        </v-col>
        <v-col cols="10"> <cert class="mt-5" /> </v-col>
      </v-row>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
import AppFooter from "../components/AppFooter";
import NavBar from "../components/NavBar";
import cert from "../components/cert";

export default {
  components: {
    cert,
    navigation,
    AppFooter,
    NavBar,
  },
};
</script>

<style scoped>
.home {
  margin-top: 50px;
}
</style>
