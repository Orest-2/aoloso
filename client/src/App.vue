<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <b-container>
      <router-view />
    </b-container>
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
</style>
