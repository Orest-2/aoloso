import { HomeState } from "./home";
import { SettingsState } from "./settings";

export interface RootState {
  home: HomeState;
  settings: SettingsState;
}
