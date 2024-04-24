<template>
 <main class="form-signin w-25 m-auto mt-5">
  <form>
    <img :src="logo" alt="logo" style="width: 100px; cursor: pointer;" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-2">Registration</h1>
    
    <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>
    
    <Input :type="'text'" label="Your name" v-model="username"/>
    <Input :type="'email'" label="Email address" v-model="email"/>
    <Input :type="'password'" label="Password" v-model="password"/>
    
  

    <!-- <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div> -->
    <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>

    <p class="mt-4">
        I have alredy had an account 
        <RouterLink  class="link-body-emphasis text-decoration-none text-primary" :to="{name: 'login'}">Login</RouterLink>
      </p>
  </form>
</main>
</template>

<script>
import {logo} from '../contstants'
import ValidationError from './ValidationError.vue'

export default {
  data() {
    return {
      logo,
      email: '',
      username: '',
      password: '',
    }
  },

  components: {
    ValidationError,
  },

  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationErrors(){
      return this.$store.state.auth.errors
    }
  },

  methods: {
    toHomeHandler() {
      return this.$router.push("/")
    },

    submitHandler(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        username: this.username,
        password: this.password
      }

      this.$store.dispatch('register', data)
      .then(user => {
        console.log("User", user)
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