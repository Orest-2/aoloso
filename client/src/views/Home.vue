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
      :items="items"
      bordered
      small
      class="text-center criteria-table"
    >
      <template #cell(t)="data">
        <b-form-select
          v-model="data.item.t"
          :options="termSetOptions"
          size="sm"
        />
      </template>
      <template #cell(q)="data">
        <b-form-input
          v-model="data.item.q"
          :formatter="(v) => Number(v)"
          min="0"
          max="1"
          step="0.01"
          type="number"
          size="sm"
        />
      </template>
      <template #cell(v)="data">
        <b-form-input
          v-model="data.item.v"
          :formatter="(v) => Number(v)"
          step="1"
          type="number"
          size="sm"
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
      />
    </b-form-group>

    <b-form-group
      v-show="m"
      label="Виберіть стан функціонування системи"
    >
      <b-form-select
        v-model="selectedSystemOperatingCondition"
        :options="socOptions"
      />
    </b-form-group>
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
import {
  SystemOperatingCondition,
  systemOperatingConditions
} from "@/constants/system-operating-conditions";

interface Item {
  criteria: string;
  t: null | TermSetItem;
  q: number;
  v: number;
}

export default Vue.extend({
  name: "Home",

  computed: {
    ...customMapState({
      termSet: (sate: RootState) => sate.settings.termSet
    }),

    ...mapGetters({
      getM: "home/getM",
      getSelectedEventScenario: "home/getSelectedEventScenario",
      getSelectedSystemOperatingCondition:
        "home/getSelectedSystemOperatingCondition",
      getTermSetRageMinMax: "settings/getTermSetRageMinMax"
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
      const opt = systemOperatingConditions.map<
        Option<SystemOperatingCondition>
      >(el => ({
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

    tsrMinMax(): { min: number; max: number } {
      return this.getTermSetRageMinMax();
    },

    fields(): Field[] {
      return [
        { key: "criteria", label: "Критерії" },
        { key: "t", label: "t1" },
        { key: "q", label: "q1" },
        {
          key: "v",
          label: `V[${this.tsrMinMax.min}, ${this.tsrMinMax.max}]`
        }
      ];
    },

    items(): Item[] {
      return Array(this.m)
        .fill(0)
        .map((_, i) => ({
          criteria: `K${i + 1}`,
          t: null,
          q: 0,
          v: 0
        }));
    }
  },

  methods: {
    ...mapActions({
      setM: "home/setM",
      setSelectedEventScenario: "home/setSelectedEventScenario",
      setSelectedSystemOperatingCondition:
        "home/setSelectedSystemOperatingCondition"
    })
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