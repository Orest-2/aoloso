import { Criterion } from "./home";
import { LSet, LSetItem } from "./settings";

export interface LSetKey {
  key: string;
  value: LSetItem;
}

export interface Result {
  data: Criterion[];
  ms: number;
  r: number;
  mr: number;
  lk: LSetKey | null;
  d: number;
}

export interface CalculatorState {
  result: Result;
}
