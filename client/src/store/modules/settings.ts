import {
  lSet,
  termSet,
  getKnowledgeBaseDeaultState,
} from "@/constants/settings";
import { systemOperatingConditions } from "@/constants/system-operating-conditions";
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { SettingsState } from "../models/settings";
import { RootState } from "../models/store";

const state: SettingsState = {
  knowledgeBase: {
    c1: getKnowledgeBaseDeaultState(0),
    c2: getKnowledgeBaseDeaultState(1),
    c3: getKnowledgeBaseDeaultState(2),
    c4: getKnowledgeBaseDeaultState(3),
    c5: getKnowledgeBaseDeaultState(4),
    c6: getKnowledgeBaseDeaultState(5),
    c7: getKnowledgeBaseDeaultState(6),
    c8: getKnowledgeBaseDeaultState(7),
  },
  termSet,
  systemOperatingConditions,
  lSet,
};

const mutations: MutationTree<SettingsState> = {
  SET_VALUE_TO_KNOWLEDGE_BASE_MATRIX(state, { c, s, m, v } = {}) {
    state.knowledgeBase[c][s][m] = Number(v);
  },
  SET_VALUE_TO_TERM_SET_RANGE({ termSet }, { k, i, v } = {}) {
    const newVal = termSet[k].range;
    newVal[i] = v;
    termSet[k].range = [...newVal];
  },
  SET_VALUE_TO_L_SET_RANGE({ lSet }, { k, i, v } = {}) {
    console.log(lSet, k);

    const newVal = lSet[k].range;
    newVal[i] = v;
    lSet[k].range = [...newVal];
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

  setValueToTermSetRange({ state, commit }, data) {
    commit("SET_VALUE_TO_TERM_SET_RANGE", data);

    const keys = Object.keys(state.termSet);
    const ni = keys.indexOf(data.k) + 1;
    const nk = keys[ni];

    if (data.i === 1 && nk) {
      commit("SET_VALUE_TO_TERM_SET_RANGE", { k: nk, i: 0, v: data.v });
    }
  },

  setValueToLSetRange({ state, commit }, data) {
    commit("SET_VALUE_TO_L_SET_RANGE", data);

    const keys = Object.keys(state.lSet);
    const ni = keys.indexOf(data.k) + 1;
    const nk = keys[ni];

    if (data.i === 1 && nk) {
      commit("SET_VALUE_TO_L_SET_RANGE", { k: nk, i: 0, v: data.v });
    }
  },
};

export const settings = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
