<template>
  <div class="home">
    <NavBar />
    <v-row>
      <v-col cols="2">
        <navigation />
      </v-col>
      <v-col cols="10">
      <h1>Results</h1>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                 Subject Name
                </th>
                <th class="text-left">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(subject, index) in subjects" :key="index">
                <td>{{ subject.course }}</td>
                <td>{{ subject.score }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <AppFooter />
  </div>
</template>

<script>
import navigation from "../components/navigation";
import AppFooter from "../components/AppFooter";
import NavBar from "../components/NavBar";

export default {
  components: {
    navigation,
    AppFooter,
    NavBar,
  },
  data() {
    return {
    };
  },
  methods: {},
  computed:{
    subjects(){
      return this.$store.state.subjects;
    }
  }
};
</script>

<style scoped></style>

<style scoped>
.home {
  margin-top: 50px;
  background-color: rgb(220, 220, 220);
}
</style>
