import { EventScenario } from "@/constants/event-scenarios";
import { SystemOperatingCondition } from "@/constants/system-operating-conditions";
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { Criterion, HomeState } from "../models/home";
import { TermSetItem } from "../models/settings";
import { RootState } from "../models/store";

const state: HomeState = {
  m: 0,
  criteria: [],
  selectedEventScenario: null,
  selectedSystemOperatingCondition: null,
};

const mutations: MutationTree<HomeState> = {
  SET_M(state, value) {
    state.m = Number(value);
  },
  SET_CRITERIA(state, value) {
    state.criteria = value;
  },
  SET_CRITERION(state, { i, key, value }) {
    const k: keyof Criterion = key;
    state.criteria[i][k] = value as never;
  },
  SET_SELECTED_EVENT_SCENARIO(state, value) {
    state.selectedEventScenario = value;
  },
  SET_SELECTED_SYSTEM_OPERATING_CONDITION(state, value) {
    state.selectedSystemOperatingCondition = value;
  },
};

const getters: GetterTree<HomeState, RootState> = {
  getM(state) {
    return state.m;
  },
  getSelectedEventScenario(state) {
    return state.selectedEventScenario;
  },
  getSelectedSystemOperatingCondition(state) {
    return state.selectedSystemOperatingCondition;
  },
};

const actions: ActionTree<HomeState, RootState> = {
  setM({ commit }, value: number) {
    commit("SET_M", value);
    commit(
      "SET_CRITERIA",
      Array(value)
        .fill(0)
        .map((_, i) => ({
          key: `K${i + 1}`,
          t: null,
          q: 0,
          v: 1,
        })),
    );
  },
  setCriterion({ commit }, { i, key, value }) {
    commit("SET_CRITERION", { i, key, value });
  },
  setSelectedEventScenario({ commit }, value: EventScenario) {
    commit("SET_SELECTED_EVENT_SCENARIO", value);
  },
  setSelectedSystemOperatingCondition(
    { commit },
    value: SystemOperatingCondition,
  ) {
    commit("SET_SELECTED_SYSTEM_OPERATING_CONDITION", value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
