<template>
  <div class="home">
      <NavBar />
      <slider />
      <AppFooter />
      <homeMain />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";
import slider from "../components/slider";
import AppFooter from "../components/AppFooter";
import homeMain from "../components/homeMain";



export default {
  name: 'Home',
  components: {
    NavBar,
    slider,
    AppFooter,
    homeMain
  },
}
</script>
