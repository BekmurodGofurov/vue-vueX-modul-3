<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img :src="logo" alt="logo" style="width: 100px; cursor: pointer;" @click="toHomeHandler">
      </a>
     
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto text-white">
        <template v-if="isLoggedIn">
          <RouterLink  class="me-3 py-2 link-body-emphasis text-decoration-none text-white" :to="{name: 'home'}">{{
            currentUser.username
          }}</RouterLink>
          <button class="btn btn-danger" @click="logout">
            <a class="py-2 link-body-emphasis text-decoration-none text-white" >Log out</a>
          </button>
          
        </template>

        <template v-if="isAnonymous">
          <RouterLink  class="me-3 py-2 link-body-emphasis text-decoration-none text-white" :to="{name: 'login'}">
            Login
          </RouterLink>
          <RouterLink  class="me-3 py-2 link-body-emphasis text-decoration-none text-white" :to="{name: 'register'}">
            Register
          </RouterLink>
        </template> 
      </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {logo} from '../contstants'
import { gettersTypes } from '@/modules/types'
export default {
  data() {
    return { 
      logo,
    }
  },
  computed:{
    ...mapGetters({
      currentUser: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggedIn,
      isAnonymous: gettersTypes.isAnonymous,
    }),
  },
  methods: {
    toHomeHandler() {
      return this.$router.push({name: "home"})
    },
    logout(){
      return this.$store.dispatch('logout')
    }
  },
}
</script>

<style>
  a { 
    color:#fff !important; 
  }
</style>