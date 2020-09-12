export interface EventScenario {
  key: string;
  name: string;
}

export const eventScenarios: EventScenario[] = [
  {
    key: "M1",
    name: "песимістичний сценарій розгортання подій",
  },
  {
    key: "M2",
    name: "обережний сценарій розгортання подій",
  },
  {
    key: "M3",
    name: "середній сценарій розгортання подій",
  },
  {
    key: "M4",
    name: "оптимістичний сценарій розгортання подій",
  },
];
