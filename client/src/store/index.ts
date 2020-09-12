import Vue from "vue";
import Vuex from "vuex";
import { IRootState } from "./models/store";
import home from "./modules/home";
import settings from "./modules/settings";

Vue.use(Vuex);

export const store = new Vuex.Store<IRootState>({
  modules: {
    home,
    settings,
  },
});
