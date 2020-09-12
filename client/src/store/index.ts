import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./models/store";
import home from "./modules/home";
import settings from "./modules/settings";

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  modules: {
    home,
    settings,
  },
});
