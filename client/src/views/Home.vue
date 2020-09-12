<template>
  <div class="home">
    123
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { IRootState } from "@/store/models/store";

export default Vue.extend({
  name: "Home",

  computed: {
    ...mapState<IRootState>({
      home: (sate: IRootState) => sate.home
    })
  }
});
</script>
