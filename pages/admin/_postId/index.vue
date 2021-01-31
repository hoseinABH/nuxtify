<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedPost: {
        author: "hosein",
        title: "how to become a monster",
        thumbnailLink:
          "https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg",
        content: "this is the test content"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
