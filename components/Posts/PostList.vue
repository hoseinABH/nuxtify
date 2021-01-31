<template>
  <section class="posts-list">
    <post-card
      id="1"
      title="title 1"
      previewText="this is some preview text"
      thumbnail="https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
    />
    <post-card
      id="2"
      title="title 2"
      previewText="this is some preview text"
      thumbnail="https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
    />
    <post-card
      id="3"
      title="title 3"
      previewText="this is some preview text"
      thumbnail="https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
    />
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
