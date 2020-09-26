<template>
  <div class="w-100">
    <h3>База знань</h3>
    <b-row cols="4">
      <b-col
        v-for="([name, data]) in Object.entries(knowledgeBase)"
        :key="name"
        class="mb-2"
      >
        <knowledge-base-table
          :name="name"
          :data="data"
        />
      </b-col>
    </b-row>

    <h3>Розмежування термів</h3>
    <term-set-table />

    <h3>Множина L для підтримки прийняття якісного рішення </h3>
    <l-set-table />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RootState } from "@/store/models/store";
import { customMapState } from "@/helpers/map-satate";

import KnowledgeBaseTable from "@/components/KnowledgeBaseTable.vue";
import TermSetTable from "@/components/TermSetTable.vue";
import LSetTable from "@/components/LSetTable.vue";

export default Vue.extend({
  name: "Settings",

  components: {
    KnowledgeBaseTable,
    TermSetTable,
    LSetTable
  },

  computed: {
    ...customMapState({
      knowledgeBase: (sate: RootState) => sate.settings.knowledgeBase
    })
  }
});
</script>

<style lang="scss" scoped>
</style>