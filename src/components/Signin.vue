<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-15">
      <v-card-title class="pb-0">
        <h2 class="display-1">Welcome to the App</h2>
      </v-card-title>
      <v-card-text>
        <h4>Login or Register</h4>
      </v-card-text>
      <v-divider></v-divider>
      <v-form>
        <v-text-field
          label="Email"
          v-model="email"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          v-model="password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="signin">Login</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showPassword: false
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    signin() {
      this.$http.plain
        .post("/signin", { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error));
    },
    signinSuccessful(response) {
      if (!response.data.csrf) {
        this.signinFailed(response);
        return;
      }
      localStorage.csrf = response.data.csrf;
      localStorage.signedIn = true;
      this.error = "";
      this.$router.replace("/todos");
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "";
      delete localStorage.csrf;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace("/todos");
      }
    }
  }
};
</script>

<style scoped></style>
