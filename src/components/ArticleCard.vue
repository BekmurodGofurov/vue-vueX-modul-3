<template lang="">
  <div class="col">
    <div class="card shadow-none" style="border: none;">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
      <div class="card-body">
				<p class='card-text fw-bold'>{{article.title}}</p>
        <p class="card-text">{{article.body.slice(0, 251)}}...</p>
        <div class="d-flex justify-content-between align-items-center card-footer">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click='navigatHandler'>Read article</button>
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
          </div>
          <small class="text-body-secondary">{{new Date(article.createdAt).toLocaleDateString('us')}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	},

  methods: {
    navigatHandler(){
      return this.$router.push(`/article/${this.article.slug}`)
      console.log(this.$router);
    }
  },
} 
</script>

<style>
.col {
	height: 690px 
}
</style>