<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <img :src="logo" alt="logo" style="width: 100px; cursor: pointer;" @click="toHomeHandler">
      <h1 class="h3 mb-3 fw-normal mt-2">Login</h1>

      <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>

      <Input :type="'email'" label="Email address"  v-model="email"/>
      <Input :type="'password'" label="Password" v-model="password"/>

      <Button type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>

      <p class="mt-4">
        I don't have an account 
        <RouterLink  class="link-body-emphasis text-decoration-none text-primary" :to="{name: 'register'}">Register</RouterLink>
      </p>
    </form>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import { logo } from '../contstants'
import ValidationError from './ValidationError.vue'

export default {
  data() {
    return {
      logo,
      email: '',
      password: '',
    }
  },
  components: {
    ValidationError,
  },

  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors,
    })
    // isLoading() {
    //   return this.$store.state.auth.isLoading
    // },
    // validationErrors(){
    //   return this.$store.state.auth.errors
    // }
  },

  methods: {
    toHomeHandler() {
      return this.$router.push("/")
    },

    submitHandler(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', data)
      .then(user => {
        // console.log("User", user)
        this.$router.push({name: 'home'})
      }).catch(err => console.log("Error:", err))
    }
  },
}
</script>

<style>
input {
  color: #fff !important;
  background-color: transparent !important;
}
</style>