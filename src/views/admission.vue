<template>
  <div class="home">
    <div>
      <NavBar />
      <v-row>
        <v-col cols="2">
          <navigation />
        </v-col>
        <v-col cols="10"> <admission /> </v-col>
      </v-row>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import navigation from "../components/navigation";
import AppFooter from "../components/AppFooter";
import NavBar from "../components/NavBar";
import admission from '../components/admission'

export default {
  components: {
    navigation,
    AppFooter,
    NavBar,
    admission,
  },
};
</script>

<style scoped>
.home {
  margin-top: 50px;
}
</style>
