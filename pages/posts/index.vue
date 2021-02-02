<template>
  <div class="posts">
    <post-list :posts="loadedPosts" />
  </div>
</template>
<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  head: {
    title: "all posts"
  }
};
</script>
<style scoped>
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
