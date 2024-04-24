<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import { mapState } from "vuex";
import {Navbar} from "@/components"
import {RouterView} from "vue-router"
export default {
  components: {Navbar},

  computed: {
    ...mapState({
      data: state => state.articles.data,
      isLoading: state => state.articles.isLoading,
      error: state => state.articles.error
    })
  },

  mounted() {
    this.$store.dispatch('getUser')
    this.$store.dispatch('articles')
  }
}
</script>
<style>

body {
  color: #edebeb;
  background-color: #333;
}

</style>