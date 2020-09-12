import { EventScenario } from "@/constants/event-scenarios";
import { SystemOperatingCondition } from "@/constants/system-operating-conditions";
import { ActionTree, GetterTree, MutationTree } from "vuex";
import { HomeState } from "../models/home";
import { RootState } from "../models/store";

const state: HomeState = {
  m: 0,
  selectedEventScenario: null,
  selectedSystemOperatingCondition: null,
};

const mutations: MutationTree<HomeState> = {
  SET_M(state, value) {
    state.m = Number(value);
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
  },
  setSelectedEventScenario({ commit }, value: EventScenario) {
    commit("SET_SELECTED_EVENT_SCENARIO", value);
  },
  setSelectedSystemOperatingCondition(
    { commit },
    value: SystemOperatingCondition
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
