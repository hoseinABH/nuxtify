<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  methods: {
    onSubmitted(formData) {
      axios
        .post(
          "https://nuxtify-8-default-rtdb.firebaseio.com/posts.json",
          formData
        )
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
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
