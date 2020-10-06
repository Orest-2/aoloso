<template>
  <div class="home">
    <b-form-group
      label="Задайте кількість критеріїв"
    >
      <b-form-input
        v-model="m"
        :formatter="(v) => Number(v)"
        step="1"
        min="0"
        type="number"
        size="sm"
      />
    </b-form-group>

    <b-table
      v-show="m"
      :fields="fields"
      :items="criteria"
      bordered
      small
      class="text-center criteria-table"
    >
      <template #cell(t)="data">
        <b-form-select
          :options="termSetOptions"
          :value="data.item.t"
          size="sm"
          debounce="200"
          @input="setCriterion({ i: data.index, key: 't', value: $event })"
        />
      </template>
      <template #cell(q)="data">
        <b-form-input
          :formatter="(v) => Number(v)"
          :value="data.item.q"
          min="0"
          max="1"
          step="0.01"
          type="number"
          size="sm"
          debounce="200"
          @input="setCriterion({ i: data.index, key: 'q', value: $event })"
        />
      </template>
      <template #cell(v)="data">
        <b-form-input
          :formatter="(v) => Number(v)"
          :value="data.item.v"
          step="1"
          min="1"
          max="10"
          type="number"
          size="sm"
          debounce="200"
          @input="setCriterion({ i: data.index, key: 'v', value: $event })"
        />
      </template>
    </b-table>

    <b-form-group
      v-show="m"
      label="Виберіть сценарій розгортання подій"
    >
      <b-form-select
        v-model="selectedEventScenario"
        :options="eventScenarioOptions"
        size="sm"
      />
    </b-form-group>

    <b-form-group
      v-show="m"
      label="Виберіть стан функціонування системи"
    >
      <b-form-select
        v-model="selectedSystemOperatingCondition"
        :options="socOptions"
        size="sm"
      />
    </b-form-group>

    <b-row v-show="m">
      <b-col class="text-center">
        <b-btn @click="calculate">
          Обчислити
        </b-btn>
      </b-col>
    </b-row>
    
    <b-row v-show="!m">
      <b-col class="text-center">
        <b-btn
          @click="example"
          variant="info"
        >
          Приклад
        </b-btn>
      </b-col>
    </b-row>

    <result-block class="m-2" />
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { customMapState } from "@/helpers/map-satate";
import { RootState } from "@/store/models/store";
import { TermSetItem } from "@/store/models/settings";
import { eventScenarios, EventScenario } from "@/constants/event-scenarios";
import { Option, Field } from "@/types";
import { SystemOperatingCondition } from "@/constants/system-operating-conditions";

import ResultBlock from "@/components/ResultBlock.vue";

export default Vue.extend({
  name: "Home",

  components: {
    ResultBlock
  },

  computed: {
    ...customMapState({
      criteria: (sate: RootState) => sate.home.criteria,
      termSet: (sate: RootState) => sate.settings.termSet,
      soc: (sate: RootState) => sate.settings.systemOperatingConditions
    }),

    ...mapGetters({
      getM: "home/getM",
      getSelectedEventScenario: "home/getSelectedEventScenario",
      getSelectedSystemOperatingCondition:
        "home/getSelectedSystemOperatingCondition"
    }),

    m: {
      get(): number {
        return this.getM;
      },
      set(val: string) {
        this.setM(val);
      }
    },

    selectedEventScenario: {
      get(): EventScenario | null {
        return this.getSelectedEventScenario;
      },
      set(val: EventScenario | null) {
        this.setSelectedEventScenario(val);
      }
    },

    eventScenarioOptions(): Option<EventScenario>[] {
      const opt = eventScenarios.map<Option<EventScenario>>(el => ({
        text: `${el.key.toUpperCase()} - ${el.name}`,
        value: el
      }));

      opt.unshift({
        text: "Виберіть сценарій",
        value: null,
        disabled: true
      });

      return opt;
    },

    selectedSystemOperatingCondition: {
      get(): SystemOperatingCondition | null {
        return this.getSelectedSystemOperatingCondition;
      },
      set(val: SystemOperatingCondition | null) {
        this.setSelectedSystemOperatingCondition(val);
      }
    },

    socOptions(): Option<SystemOperatingCondition>[] {
      const opt = this.soc.map<Option<SystemOperatingCondition>>(el => ({
        text: `${el.key.toUpperCase()} - ${el.name}`,
        value: el
      }));

      opt.unshift({
        text: "Виберіть стан",
        value: null,
        disabled: true
      });

      return opt;
    },

    termSetOptions(): Option<TermSetItem>[] {
      const opt = Object.entries(this.termSet).map<Option<TermSetItem>>(
        ([k, v]) => ({
          text: `${k.toUpperCase()} - ${v.name}`,
          value: v
        })
      );

      opt.unshift({
        text: "Виберіть терм",
        value: null,
        disabled: true
      });

      return opt;
    },

    fields(): Field[] {
      return [
        { key: "key", label: "Критерії" },
        { key: "t", label: "t1" },
        { key: "q", label: "q1" },
        {
          key: "v",
          label: `V[1, 10]`
        }
      ];
    }
  },

  methods: {
    ...mapActions({
      setM: "home/setM",
      setCriterion: "home/setCriterion",
      setSelectedEventScenario: "home/setSelectedEventScenario",
      calculate: "calculator/calculate",
      setSelectedSystemOperatingCondition:
        "home/setSelectedSystemOperatingCondition"
    }),

    example() {
      const ti = [2, 5, 4];
      const q = [0.2, 0.8, 0.9];

      this.setM(3);

      for (let i = 0; i < 3; i++) {
        this.setCriterion({
          i,
          key: "t",
          value: this.termSetOptions[ti[i]].value
        });
        this.setCriterion({ i, key: "q", value: q[i] });
        this.setCriterion({ i, key: "v", value: 8 + i });
      }

      this.setSelectedEventScenario(this.eventScenarioOptions[2].value);
      this.setSelectedSystemOperatingCondition(this.socOptions[1].value);
    }
  }
});
</script>

<style lang="scss" scoped>
.criteria-table {
  /deep/ {
    td {
      vertical-align: middle;
    }
  }
}
</style>