import { ActionTree, GetterTree, MutationTree } from "vuex";
import { CalculatorState } from "../models/calculator";
import { Criterion } from "../models/home";
import { RootState } from "../models/store";

const state: CalculatorState = {
  result: { data: [], ms: 0, r: 0, mr: 0, d: 0 },
};

const mutations: MutationTree<CalculatorState> = {
  SET_RESULT(state, data) {
    state.result = data;
  },
};

const getters: GetterTree<CalculatorState, RootState> = {};

const actions: ActionTree<CalculatorState, RootState> = {
  calculate({ rootState, rootGetters, commit }) {
    const getTermSetRageMinMax = rootGetters["settings/getTermSetRageMinMax"];
    const {
      criteria,
      selectedEventScenario,
      selectedSystemOperatingCondition,
    } = rootState.home;
    const { knowledgeBase, lSet } = rootState.settings;

    const { min: a1, max: a6 } = getTermSetRageMinMax();

    const { sumv } = criteria.reduce(
      (res, el) => {
        res.sumv += el.v;
        return res;
      },
      { sumv: 0 }
    );

    const data = criteria.map<Criterion>((el) => {
      let mo = 0;
      const { t, q } = el;
      const o = (t?.range[1] || 0) * q;
      const mida = (a1 + a6) / 2;

      if (a1 < o && o <= mida) mo = 2 * Math.pow((o - a1) / (a6 - a1), 2);

      if (mida < o && o < a6) mo = 1 - 2 * Math.pow((a6 - o) / (a6 - a1), 2);

      if (o >= a6) mo = 1;

      // Step 2.1
      const w = el.v / sumv;

      return {
        ...el,
        o,
        mo,
        w,
      };
    });

    // Step 2.2
    const ms = selectedEventScenario?.calc(data) || 0;

    // Step 3
    const r = 100 * (1 - ms);

    // Step 4
    const mr = selectedSystemOperatingCondition?.calc(r) || 0;

    const lk = Object.entries(lSet).find(
      ([, v]) => v.range[0] < mr && mr <= v.range[1]
    );

    let d = 0;

    if (selectedSystemOperatingCondition && selectedEventScenario && lk) {
      const ssock = selectedSystemOperatingCondition.key.toLowerCase();
      const ssek = selectedEventScenario.key.toLowerCase();

      d = knowledgeBase[ssock][lk[0]][ssek];
    }

    commit("SET_RESULT", { data, ms, r, mr, d });
  },
};

export const calculator = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
