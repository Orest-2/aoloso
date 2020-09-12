import { EventScenario } from "@/constants/event-scenarios";
import { SystemOperatingCondition } from "@/constants/system-operating-conditions";

export interface HomeState {
  m: number;
  selectedEventScenario: null | EventScenario;
  selectedSystemOperatingCondition: null | SystemOperatingCondition;
}
