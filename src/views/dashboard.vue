<template>
  <div class="home">
    <NavBar />
    <dashboardMain />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";
import AppFooter from "../components/AppFooter";
import dashboardMain from "../components/dashboardMain";
import idCard from "../components/idCard";

export default {
  name: "Home",
  components: {
    NavBar,
    AppFooter,
    dashboardMain,
    idCard,
  },
};
</script>

<style scoped>
.home {
  margin-top: 50px;
  background-color: rgb(220, 220, 220);
}
</style>
