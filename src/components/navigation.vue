<template>
  <div>
    <v-navigation-drawer class="primary accent-1 text--white" dark permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
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
        { title: "Home", icon: "mdi-home", event: "openModal" },
        { title: "Admission", icon: "mdi-school", event: "openModal" },
        {
          title: "Attendance",
          icon: "mdi-checkbox-marked-circle",
          event: "openModal",
        },
        { title: "Home Work", icon: "mdi-pencil-outline", event: "openModal" },
        { title: "Tests", icon: "mdi-pencil-lock", event: "openModal" },
        { title: "Library", icon: "mdi-book", event: "openModal" },
        {
          title: "Marks",
          icon: "mdi-checkbox-multiple-marked-outline",
          event: "openModal",
        },
        { title: "Fees", icon: "mdi-cash", event: "openModal" },
        { title: "Id cards", icon: "mdi-account-outline", event: "openModal" },
        { title: "Time Table", icon: "mdi-timetable", event: "openModal" },
        { title: "Logout", icon: "mdi-power-settings", event: "openModal" },
        { title: "Accounts", icon: "mdi-account-circle", event: "openModal" },
      ],
    };
  },
};
</script>
