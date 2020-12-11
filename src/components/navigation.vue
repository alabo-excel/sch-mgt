<template>
  <div>
    <v-navigation-drawer class="primary accent-1 text--white" dark permanent>
      <v-list-item>
        <v-list-item-content
          class="text-center"
          v-for="user in users"
          :key="user.firstName"
        >
          <v-avatar>
            <img :src="user.image" />
          </v-avatar>
          <v-list-item-title class="title">
            {{ user.firstName }} {{ user.lastName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.class }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="item.event">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", event: this.linkHome },
        { title: "Dashboard", icon: "mdi-view-dashboard", event: this.linkDashboard },
        { title: "Admission", icon: "mdi-school", event: this.linkAdmission },
        {
          title: "Attendance",
          icon: "mdi-checkbox-marked-circle",
          event: null ,
        },
        { title: "Home Work", icon: "mdi-pencil-outline", event: null },
        { title: "Tests", icon: "mdi-pencil-lock", event: null },
        { title: "Library", icon: "mdi-book", event: null },
        {
          title: "Marks",
          icon: "mdi-checkbox-multiple-marked-outline",
          event: null,
        },
        { title: "Fees", icon: "mdi-cash", event: null },
        { title: "Id cards", icon: "mdi-account-outline", event: this.linkIdCard },
        { title: "Time Table", icon: "mdi-timetable", event: null },
        { title: "Logout", icon: "mdi-power-settings", event: null },
        { title: "Accounts", icon: "mdi-account-circle", event: null },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    linkHome() {
      this.$router.push("/");
    },
    linkDashboard() {
      this.$router.push("/dashboard");
    },
    linkAdmission() {
      this.$router.push("/admission");
    },
    linkIdCard() {
      this.$router.push("/card");
    },
  },
};
</script>
