<template>
  <b-table
    :fields="fields"
    :items="items"
    small
    bordered
    class="text-center"
  >
    <template #cell(key)="data">
      {{ data.value.toUpperCase() }}
    </template>
    <template #cell(range)="data">
      <b-row>
        <b-col>
          <b-form-group
            label-cols="2"
            label-size="sm"
            label="З:"
            class="m-0"
          >
            <b-form-input
              size="sm"
              debounce="200"
              :disabled="data.index > 0"
              :value="data.value[0]"
              @input="setValueToTermSetRange({ k: data.item.key, i: 0, v: $event })"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label-cols="2"
            label-size="sm"
            label="По:"
            class="m-0"
          >
            <b-form-input
              size="sm"
              debounce="200"
              :value="data.value[1]"
              @input="setValueToTermSetRange({ k: data.item.key, i: 1, v: $event })"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </template>
  </b-table>
</template>

<script lang="ts">
import Vue from "vue";
import { customMapState } from "@/helpers/map-satate";
import { RootState } from "@/store/models/store";
import { mapActions } from "vuex";

interface Items {
  key: string;
  name: string;
  range: [number, number];
}

export default Vue.extend({
  data() {
    return {
      fields: [
        { key: "key", label: "Позначення" },
        { key: "name", label: "Назва" },
        { key: "range", label: "Проміжок" }
      ]
    };
  },

  computed: {
    ...customMapState({
      termSet: (s: RootState) => s.settings.termSet
    }),

    items(): Items[] {
      return Object.entries(this.termSet).map(([key, { name, range }]) => ({
        key,
        name,
        range
      }));
    }
  },

  methods: {
    ...mapActions({
      setValueToTermSetRange: "settings/setValueToTermSetRange"
    })
  }
});
</script>