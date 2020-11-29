<template>
  <v-container class="nav">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>ToDo Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showPassword: false,
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Signin",
          url: "/signin"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  padding-bottom: 80px;
}
</style>
