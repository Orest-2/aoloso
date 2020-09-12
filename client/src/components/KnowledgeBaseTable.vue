<template>
  <b-table-simple
    small
    bordered
  >
    <b-tbody>
      <b-tr
        v-for="([skey, mdata] ,i) in Object.entries(data)"
        :key="`c1-${i}`"
        class="text-center"
      >
        <b-th>
          {{ skey }}
        </b-th>
        <b-td
          v-for="([mkey, v] ,j) in Object.entries(mdata)"
          :key="`${mkey}-${j}`"
        >
          <b-form-input
            size="sm"
            :value="v"
            class="text-center"
            debounce="200"
            @input="setValueToKnowledgeBaseMatrix({c: name, s: skey, m: mkey, v: $event})"
          />
        </b-td>
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr class="text-center">
        <b-th>
          {{ name.toUpperCase() }}
        </b-th>
        <b-th
          v-for="(v ,i) in m"
          :key="`${v}-${i}`"
        >
          {{ v.toUpperCase() }}
        </b-th>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
</template>

<script lang="ts">
import Vue from "vue";
import { KnowledgeBaseMatrix } from "@/store/models/settings";
import { mapActions } from "vuex";

export default Vue.extend({
  props: {
    data: {
      type: Object as () => KnowledgeBaseMatrix,
      default: Object as () => KnowledgeBaseMatrix
    },
    name: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      m: ["M1", "M2", "M3", "M4"]
    };
  },

  methods: {
    ...mapActions({
      setValueToKnowledgeBaseMatrix: "settings/setValueToKnowledgeBaseMatrix"
    })
  }
});
</script>