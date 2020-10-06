<template>
  <div v-show="result.data.length">
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
            :items="result.data"
            bordered
            small
            class="text-center criteria-table"
          >
            <template #cell(o)="{ value }">
              {{ value.toFixed(3) }}
            </template>
            <template #cell(mo)="{ value }">
              {{ value.toFixed(3) }}
            </template>
            <template #cell(w)="{ value }">
              {{ value.toFixed(3) }}
            </template>
          </b-table>
          <div class="w-100 text-center my-2">
            <span>M<sub>{{ ses && ses.index + 1 }}</sub>(S) = {{ result.ms.toFixed(3) }}</span>
          </div>

          <div class="w-100 text-center my-2">
            <span>R<sub>{{ ses && ses.index + 1 }}</sub> = {{ result.r.toFixed(3) }}</span>
          </div>

          <div class="w-100 text-center my-2">
            <span>
              m(R<sub>{{ ses && ses.index + 1 }}</sub>) = {{ result.mr.toFixed(3) }}
            </span>
            <span>
              {{ result.lk && `∈ [${result.lk.value.range.join(', ')}) - ${result.lk.key}: ${result.lk.value.name}` }}
            </span>
          </div>

          <div class="w-100 text-center my-2">
            <span>Y = {{ result.d }}</span>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
    <div class="w-100 text-center my-3">
      <h2>
        Рівень ризику функціонування системи 
        <b :class="{ 'text-success': result.d, 'text-danger': !result.d,}">
          {{ ['неприйнятний', 'прийнятний'][result.d] }}
        </b>
      </h2>
    </div>
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
      result: (state: RootState) => state.calculator.result,
      ses: (state: RootState) => state.home.selectedEventScenario
    }),

    fields(): Field[] {
      return [
        { key: "key", label: "Критерії" },
        { key: "o", label: "Oi" },
        { key: "mo", label: "m(Oi)" },
        { key: "w", label: "Wi" }
      ];
    }
  }
});
</script>

<style lang="scss" scoped>
</style>