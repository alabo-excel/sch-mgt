<template>
  <div>
    <v-row>
      <v-col cols="2">
        <navigation />
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="2" v-for="(list, index) in lists" :key="index">
            <v-card class="card mx-0" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    <v-icon>{{ list.icon }}</v-icon>
                    {{ list.title }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="headline mb-1">
                    {{ list.value }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" class="white ml-3">
            <h3>Dashboard</h3>
          </v-col>
          <v-col v-for="form in forms" :key="form.title" cols="2">
            <v-card class="mx-auto p-5 text-left" max-width="400" @click="form.event">
              <div>
                <v-icon large right>
                  {{ form.icon }}
                </v-icon>
              </div>
              <v-card-title class="text-center">
                <div>
                  <span class="title font-weight-light text-center">{{
                    form.title
                  }}</span>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import idCard from "../components/idCard";
import navigation from "../components/navigation";

export default {
  components: {
    idCard,
    navigation,
  },
  data() {
    return {
      lists: [
        { title: "Total Users", icon: "mdi-desktop-classic", value: 100 },
        { title: "Total Parent", icon: "mdi-desktop-classic", value: 200 },
        { title: "Total Students", icon: "mdi-desktop-classic", value: 134 },
        { title: "Total User Visits", icon: "mdi-desktop-classic", value: 44 },
        {
          title: "Total Parents Visits",
          icon: "mdi-desktop-classic",
          value: 911,
        },
        {
          title: "Total Student Visits",
          icon: "mdi-desktop-classic",
          value: 55,
        },
      ],
      forms: [
        { title: "Admission", icon: "mdi-school", event: this.linkAdmission },
        { title: "SMS", icon: "mdi-message-alert", event: null },
        { title: "Fees ", icon: "mdi-cash", event: null },
        { title: "Transport", icon: "mdi-train-car", event: null },
        { title: "Certificate", icon: "mdi-certificate", event: this.linkCertificate },
        { title: "Activities", icon: "mdi-calendar-multiple", event: null },
        { title: "Exam", icon: "mdi-pencil", event: null },
        { title: "Lesson Plan", icon: "mdi-floor-plan", event: null },
        { title: "Home Work", icon: "mdi-pencil", event: null },
        { title: "News", icon: "mdi-email-newsletter", event: null },
        { title: "Events ", icon: "mdi-calendar-multiple-check", event: null },
        { title: "Syllabus", icon: "mdi-message-reply", event: null },
        { title: "Messages", icon: "mdi-android-messages", event: null },
        { title: "Library", icon: "mdi-book", event: null },
        { title: "Results", icon: "mdi-counter", event: this.linkResult },
        { title: "Bus Route", icon: "mdi-bus-double-decker", event: null },
        { title: "Visitors", icon: "mdi-account-child", event: null },
        { title: "Hostel", icon: "mdi-home-city", event: null },
      ],
      right: null,
      dialog: false,
    };
  },
  methods: {
    linkAdmission(){
      this.$router.push("/admission");
    },
    linkCertificate(){
            this.$router.push("/certificate");
    },
    linkResult(){
            this.$router.push("/result");
    }
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(220, 220, 220);
}
</style>

