<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",
  methods: {
    onSubmitted(formData) {
      this.$store
        .dispatch("addPost", formData)
        .then(() => this.$router.push("/admin"));
    }
  },
  head: {
    title: "create post"
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
