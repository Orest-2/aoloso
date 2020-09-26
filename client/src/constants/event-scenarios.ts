import { mult, sum } from "@/helpers/calculator";
import { Criterion } from "@/store/models/home";

export interface EventScenario {
  key: string;
  name: string;
  index: number;
  calc: (data: Criterion[]) => number;
}

export const eventScenarios: EventScenario[] = [
  {
    key: "M1",
    name: "песимістичний сценарій розгортання подій",
    index: 0,
    calc: (data: Criterion[]) => 1 / sum(data, (el) => el.w / el.mo),
  },
  {
    key: "M2",
    name: "обережний сценарій розгортання подій",
    index: 1,
    calc: (data: Criterion[]) => mult(data, (el) => Math.pow(el.mo, el.w)),
  },
  {
    key: "M3",
    name: "середній сценарій розгортання подій",
    index: 2,
    calc: (data: Criterion[]) => sum(data, (el) => el.w * el.mo),
  },
  {
    key: "M4",
    name: "оптимістичний сценарій розгортання подій",
    index: 3,
    calc: (data: Criterion[]) =>
      Math.sqrt(sum(data, (el) => el.w * Math.pow(el.mo, 2))),
  },
];
