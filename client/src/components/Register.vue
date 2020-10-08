<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" offset="3" style="margin-left: 25%">
        <div class="white elevation-2">
          <v-toolbar flat dense color="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              name="email"
              v-model="email"
              label="Email">
            </v-text-field>
            <br>
            <v-text-field
              type="password"
              name="password"
              v-model="password"
              label="Password">
            </v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn
              dark
              class="cyan"
              @click="register">
              Register
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
  // ,
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
