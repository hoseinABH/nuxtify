<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div>Last updated on {{ loadedPost.updatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
    </section>
    <p>
      {{ loadedPost.content }}
    </p>
    <section class="post-feedback">
      <p>
        let me know what you think about my post
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData({ params }) {
    return {
      loadedPost: {
        id: params.id,
        title: `title ${params.id}`,
        previewText: "this is a normal text",
        author: "hosein ABH",
        updatedDate: new Date(),
        content: "",
        thumbnail:
          "https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
      }
    };
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
