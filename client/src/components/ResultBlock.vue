<template>
  <div v-show="result.length">
    <b-card
      no-body
      class="mb-1"
    >
      <b-card-header
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button
          block
          v-b-toggle.accordion-1
          variant="info"
        >
          Проміжні значення розрахунку
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        role="tabpanel"
      >
        <b-card-body>
          <b-table
            :fields="fields"
            :items="result"
            bordered
            small
            class="text-center criteria-table"
          />
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Field } from "@/types";
import { customMapState } from "@/helpers/map-satate";
import { RootState } from "@/store/models/store";

export default Vue.extend({
  computed: {
    ...customMapState({
      result: (state: RootState) => state.calculator.result
    }),

    fields(): Field[] {
      return [
        { key: "key", label: "Критерії" },
        { key: "o", label: "Oi" },
        { key: "mo", label: "m(Oi)" }
      ];
    }
  }
});
</script>

<style lang="scss" scoped>
</style>