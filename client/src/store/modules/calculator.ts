import { ActionTree, GetterTree, MutationTree } from "vuex";
import { CalculatorState } from "../models/calculator";
import { Criterion } from "../models/home";
import { RootState } from "../models/store";

const state: CalculatorState = {
  result: [],
};

const mutations: MutationTree<CalculatorState> = {
  SET_RESULT(state, data) {
    state.result = data;
  },
};

const getters: GetterTree<CalculatorState, RootState> = {};

const actions: ActionTree<CalculatorState, RootState> = {
  calculate({ rootState, rootGetters, commit }) {
    console.log(rootGetters);
    const getTermSetRageMinMax = rootGetters["settings/getTermSetRageMinMax"];
    const { criteria } = rootState.home;

    const { min: a1, max: a6 } = getTermSetRageMinMax();

    const result = criteria.map<Criterion>((el) => {
      let mo = 0;
      const { t, q } = el;
      const o = (t?.range[1] || 0) * q;
      const mida = (a1 + a6) / 2;

      if (a1 < o && o <= mida) mo = 2 * Math.pow((o - a1) / (a6 - a1), 2);

      if (mida < o && o < a6) mo = 1 - 2 * Math.pow((a6 - o) / (a6 - a1), 2);

      if (o >= a6) mo = 1;

      return {
        ...el,
        o,
        mo,
      };
    });

    commit("SET_RESULT", result);
  },
};

export const calculator = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
