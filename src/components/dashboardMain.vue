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
            <v-card class="mx-auto p-5 text-left" max-width="400">
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
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <idCard />

        <v-card-actions>
          <v-btn color="primary darken-1" text @click="imageConversion">
            Convert
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        { title: "Admission", icon: "mdi-school" },
        { title: "SMS", icon: "mdi-message-alert" },
        { title: "Fees ", icon: "mdi-cash" },
        { title: "Transport", icon: "mdi-train-car" },
        { title: "Certificate", icon: "mdi-certificate" },
        { title: "Activities", icon: "mdi-calendar-multiple" },
        { title: "Exam", icon: "mdi-pencil" },
        { title: "Lesson Plan", icon: "mdi-floor-plan" },
        { title: "Home Work", icon: "mdi-pencil" },
        { title: "News", icon: "mdi-email-newsletter" },
        { title: "Events ", icon: "mdi-calendar-multiple-check" },
        { title: "Syllabus", icon: "mdi-message-reply" },
        { title: "Messages", icon: "mdi-android-messages" },
        { title: "Library", icon: "mdi-book" },
        { title: "Results", icon: "mdi-counter" },
        { title: "Bus Route", icon: "mdi-bus-double-decker" },
        { title: "Visitors", icon: "mdi-account-child" },
        { title: "Hostel", icon: "mdi-home-city" },
      ],
      right: null,
      dialog: false,
    };
  },
  methods: {
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
      document.getElementById("nameForm").style.display = "none";
    },
    openModal() {
      dialog: true;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(220, 220, 220);
}
</style>
F
