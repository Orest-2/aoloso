import { Criterion } from "./home";

export interface Result {
  data: Criterion[];
  ms: number;
  r: number;
  mr: number;
  d: number;
}

export interface CalculatorState {
  result: Result;
}
