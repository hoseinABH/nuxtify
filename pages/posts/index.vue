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
