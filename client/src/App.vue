<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <b-container>
      <router-view />
    </b-container>
    <footer class="footer">
      <div class="container text-center">
        <span class="text-muted">
          Copyright © 2020 developed by Pidfihurnyi Orest
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar
  }
});
</script>

<style lang="scss">
html {
  position: relative;
  min-height: 100%;
}
#app {
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
</style>
