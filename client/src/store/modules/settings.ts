import { ActionTree, GetterTree, MutationTree } from "vuex";
import { SettingsState } from "../models/settings";
import { RootState } from "../models/store";

const getZerroState = () => ({
  vhs: { m1: 0, m2: 0, m3: 0, m4: 0 },
  hs: { m1: 0, m2: 0, m3: 0, m4: 0 },
  as: { m1: 0, m2: 0, m3: 0, m4: 0 },
  ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
  vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
});

const state: SettingsState = {
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
      name: "низький рівень",
      range: [0, 0],
    },
    t2: {
      name: "рівень нижче середнього",
      range: [0, 0],
    },
    t3: {
      name: "середній рівень",
      range: [0, 0],
    },
    t4: {
      name: "рівень вище середнього",
      range: [0, 0],
    },
    t5: {
      name: "високий рівень",
      range: [0, 0],
    },
  },
};

const mutations: MutationTree<SettingsState> = {
  SET_VALUE_TO_KNOWLEDGE_BASE_MATRIX(state, { c, s, m, v } = {}) {
    state.knowledgeBase[c][s][m] = Number(v);
  },
  SET_VALUE_TO_TERM_SET_RANGE(state, { k, i, v } = {}) {
    state.termSet[k].range[i] = Number(v);
  },
};

const getters: GetterTree<SettingsState, RootState> = {
  getTermSetRageMinMax(state) {
    return () => ({
      min: state.termSet.t1.range[0],
      max: state.termSet.t5.range[1],
    });
  },
};

const actions: ActionTree<SettingsState, RootState> = {
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
