<template>
  <v-app-bar dense fixed color="cyan" dark>
    <v-toolbar-title>
      <!-- <router-link to="/">
        TabTracker
      </router-link> -->
      <!-- another way -->
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        Tab Tracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn depressed color="cyan">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!-- <v-btn depressed color="cyan">
        <router-link to="register">
          Sign Up
        </router-link>
      </v-btn> -->
      <!-- another to do this -->
      <v-btn depressed color="cyan"
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn depressed color="cyan"
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
   color: blueviolet;
}
</style>
