<template>
  <div>
    <the-header @sidenavToggle="displaySideNav = !displaySideNav" />
    <the-sidenav :show="displaySideNav" @close="displaySideNav = false" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      displaySideNav: false
    };
  }
};
</script>
<style>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
</style>
