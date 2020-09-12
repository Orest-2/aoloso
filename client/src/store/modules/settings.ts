import { ActionTree, GetterTree, MutationTree } from "vuex";
import { ISettingsState } from "../models/settings";
import { IRootState } from "../models/store";

const getZerroState = () => ({
  vhs: { m1: 0, m2: 0, m3: 0, m4: 0 },
  hs: { m1: 0, m2: 0, m3: 0, m4: 0 },
  as: { m1: 0, m2: 0, m3: 0, m4: 0 },
  ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
  vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
});

const state: ISettingsState = {
  knowledgeBase: {
    c1: getZerroState(),
    c2: getZerroState(),
    c3: getZerroState(),
    c4: getZerroState(),
    c5: getZerroState(),
    c6: getZerroState(),
    c7: getZerroState(),
    c8: getZerroState(),
  },
  termSet: {
    t1: {
      description: "низький рівень",
      range: [0, 0],
    },
    t2: {
      description: "рівень нижче середнього",
      range: [0, 0],
    },
    t3: {
      description: "середній рівень",
      range: [0, 0],
    },
    t4: {
      description: "рівень вище середнього",
      range: [0, 0],
    },
    t5: {
      description: "високий рівень",
      range: [0, 0],
    },
  },
};

const mutations: MutationTree<ISettingsState> = {
  SET_VALUE_TO_KNOWLEDGE_BASE_MATRIX(state, { c, s, m, v } = {}) {
    state.knowledgeBase[c][s][m] = Number(v);
  },
  SET_VALUE_TO_TERM_SET_RANGE(state, { k, i, v } = {}) {
    state.termSet[k].range[i] = Number(v);
  },
};

const getters: GetterTree<ISettingsState, IRootState> = {
  getTermSetRageMinMax(state) {
    return {
      min: state.termSet.t1.range[0],
      max: state.termSet.t5.range[1],
    };
  },
};

const actions: ActionTree<ISettingsState, IRootState> = {
  setValueToKnowledgeBaseMatrix({ commit }, data) {
    commit("SET_VALUE_TO_KNOWLEDGE_BASE_MATRIX", data);
  },

  setValueToTermSetRange({ commit }, data) {
    commit("SET_VALUE_TO_TERM_SET_RANGE", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
