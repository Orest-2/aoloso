import { EventScenario } from "@/constants/event-scenarios";
import { SystemOperatingCondition } from "@/constants/system-operating-conditions";
import { TermSetItem } from "./settings";

export interface Criterion {
  key: string;
  t: null | TermSetItem;
  q: number;
  v: number;
  o: number;
  mo: number;
  w: number;
}

export interface HomeState {
  m: number;
  criteria: Criterion[];
  selectedEventScenario: null | EventScenario;
  selectedSystemOperatingCondition: null | SystemOperatingCondition;
}
